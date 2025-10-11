'use client'
import React, { useState } from 'react'
import { 
  GitPullRequest, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown,
  Code2, 
  FileCode, 
  GitCommit,
  Users,
  Clock,
  BarChart3,
  Shield,
  Zap,
  Database,
  Server,
  Settings,
  Award,
  Target
} from 'lucide-react'

const CodeReviewPortfolio = () => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'architecture' | 'metrics'>('reviews')
  const [selectedReview, setSelectedReview] = useState<number | null>(null)

  const codeReviews = [
    {
      id: 1,
      title: 'API Performance Optimization',
      description: 'Reviewed and optimized slow API endpoints causing user experience issues',
      impact: '94% performance improvement (2.5s → 150ms)',
      filesChanged: 12,
      linesAdded: 245,
      linesRemoved: 180,
      status: 'merged',
      author: 'Junior Developer',
      reviewer: 'Amin Chouaibi',
      comments: 8,
      before: `// BEFORE: Inefficient query
public async Task<List<Review>> GetReviewsAsync(int productId)
{
    var reviews = await _context.Reviews
        .Where(r => r.ProductId == productId)
        .Include(r => r.User)
        .Include(r => r.Comments)
        .ToListAsync();
    
    // Additional processing in memory
    foreach(var review in reviews)
    {
        review.User.ProfilePicture = GetProfilePicture(review.UserId);
        review.AverageRating = CalculateAverage(review.Comments);
    }
    
    return reviews;
}`,
      after: `// AFTER: Optimized with CQRS pattern
public async Task<List<ReviewDto>> GetReviewsAsync(int productId)
{
    // Use read-optimized query with materialized view
    var query = @"
        SELECT r.Id, r.Content, r.Rating, r.CreatedAt,
               u.Name, u.ProfilePictureUrl,
               rv.AverageRating, rv.CommentCount
        FROM ReviewViews rv
        JOIN Reviews r ON rv.ReviewId = r.Id
        JOIN Users u ON r.UserId = u.Id
        WHERE r.ProductId = @ProductId
        ORDER BY rv.HelpfulnessScore DESC";
    
    return await _queryDb.QueryAsync<ReviewDto>(query, new { ProductId = productId });
}`,
      feedback: [
        "✅ Great use of CQRS pattern to separate read/write concerns",
        "✅ Materialized view approach eliminates N+1 queries", 
        "✅ Proper SQL parameterization prevents injection",
        "🔧 Consider adding caching layer for frequently accessed reviews",
        "🔧 Add monitoring for query performance degradation"
      ]
    },
    {
      id: 2,
      title: 'Event-Driven Architecture Implementation',
      description: 'Migrated synchronous notification system to event-driven pattern',
      impact: '1B+ events processed monthly with 99.99% reliability',
      filesChanged: 25,
      linesAdded: 890,
      linesRemoved: 340,
      status: 'merged',
      author: 'Mid-level Developer',
      reviewer: 'Amin Chouaibi',
      comments: 15,
      before: `// BEFORE: Synchronous notification sending
public async Task CreateReviewAsync(CreateReviewCommand command)
{
    var review = new Review(command);
    await _repository.SaveAsync(review);
    
    // Synchronous calls - blocking and fragile
    await _emailService.SendReviewCreatedEmail(review);
    await _pushService.SendPushNotification(review);
    await _analyticsService.TrackReviewCreated(review);
    
    // If any service fails, entire operation fails
}`,
      after: `// AFTER: Event-driven pattern with reliability
public async Task CreateReviewAsync(CreateReviewCommand command)
{
    var review = new Review(command);
    await _repository.SaveAsync(review);
    
    // Publish domain event - fire and forget
    var @event = new ReviewCreatedEvent
    {
        ReviewId = review.Id,
        UserId = review.UserId,
        ProductId = review.ProductId,
        CreatedAt = review.CreatedAt
    };
    
    await _eventBus.PublishAsync(@event);
}

// Separate event handlers ensure resilience
public class ReviewCreatedEventHandler : IEventHandler<ReviewCreatedEvent>
{
    public async Task HandleAsync(ReviewCreatedEvent @event)
    {
        // Each handler is independent and can retry
        await _emailService.SendReviewCreatedEmail(@event);
    }
}`,
      feedback: [
        "✅ Excellent separation of concerns with domain events",
        "✅ Improved system resilience through decoupling",
        "✅ Proper event versioning strategy implemented",
        "🔧 Consider adding event sourcing for audit trail",
        "🔧 Implement dead letter queue for failed events"
      ]
    },
    {
      id: 3,
      title: 'Microservices Security Enhancement',
      description: 'Added comprehensive security layer to microservices communication',
      impact: 'Zero security incidents post-implementation',
      filesChanged: 18,
      linesAdded: 567,
      linesRemoved: 89,
      status: 'merged',
      author: 'Security Team',
      reviewer: 'Amin Chouaibi',
      comments: 12,
      before: `// BEFORE: Basic service-to-service calls
public async Task<UserData> GetUserAsync(int userId)
{
    var response = await _httpClient.GetAsync($"/api/users/{userId}");
    return await response.Content.ReadAsAsync<UserData>();
}`,
      after: `// AFTER: Secure service communication with JWT
public async Task<UserData> GetUserAsync(int userId)
{
    var token = await _tokenProvider.GetServiceTokenAsync("user-service");
    
    _httpClient.DefaultRequestHeaders.Authorization = 
        new AuthenticationHeaderValue("Bearer", token);
    
    var response = await _httpClient.GetAsync($"/api/users/{userId}");
    
    if (!response.IsSuccessStatusCode)
    {
        _logger.LogWarning("Failed to retrieve user {UserId}: {StatusCode}", 
            userId, response.StatusCode);
        throw new ServiceException($"User service returned {response.StatusCode}");
    }
    
    return await response.Content.ReadAsAsync<UserData>();
}`,
      feedback: [
        "✅ Proper JWT implementation for service authentication",
        "✅ Good error handling and logging practices",
        "✅ Secure token refresh mechanism implemented",
        "🔧 Add circuit breaker pattern for resilience",
        "🔧 Consider implementing rate limiting"
      ]
    }
  ]

  const architectureDecisions = [
    {
      title: 'Migration to Event-Driven Architecture',
      status: 'Implemented',
      impact: 'High',
      description: 'Transitioned from synchronous to event-driven communication patterns',
      reasoning: [
        'Improved system resilience and fault tolerance',
        'Better scalability for high-volume operations',
        'Reduced coupling between microservices',
        'Enhanced observability and monitoring capabilities'
      ],
      tradeoffs: [
        'Increased complexity in debugging distributed flows',
        'Eventual consistency model requires careful design',
        'Additional infrastructure for message brokers'
      ],
      metrics: {
        'Throughput': '10M → 30M requests/day',
        'Latency P95': '500ms → 150ms',
        'Availability': '99.5% → 99.9%',
        'Error Rate': '2.1% → 0.3%'
      }
    },
    {
      title: 'CQRS Implementation for Read/Write Separation',
      status: 'Implemented',
      impact: 'High',
      description: 'Separated read and write models to optimize for different access patterns',
      reasoning: [
        'Write operations optimized for consistency and business logic',
        'Read operations optimized for performance and specific queries',
        'Independent scaling of read and write workloads',
        'Better caching strategies for read-heavy operations'
      ],
      tradeoffs: [
        'Additional complexity in maintaining two models',
        'Data synchronization challenges',
        'Increased development overhead initially'
      ],
      metrics: {
        'Query Performance': '2.5s → 150ms (94% improvement)',
        'Write Throughput': '1K → 5K ops/sec',
        'Cache Hit Rate': '65% → 92%',
        'Development Velocity': '+25% after initial learning curve'
      }
    },
    {
      title: 'Microservices Decomposition Strategy',
      status: 'Completed',
      impact: 'Very High',
      description: 'Strategic decomposition of monolith into domain-driven microservices',
      reasoning: [
        'Independent deployment and scaling per service',
        'Technology diversity for optimal tool selection',
        'Team autonomy and ownership boundaries',
        'Improved fault isolation and system resilience'
      ],
      tradeoffs: [
        'Network latency between service calls',
        'Distributed system complexity',
        'Service discovery and configuration overhead'
      ],
      metrics: {
        'Deployment Frequency': 'Weekly → Daily',
        'Mean Time to Recovery': '4 hours → 15 minutes',
        'Infrastructure Costs': '-68% (despite 10x traffic)',
        'Team Velocity': '+40% average across teams'
      }
    }
  ]

  const qualityMetrics = {
    codeQuality: {
      score: 92,
      trend: 'up',
      details: [
        { metric: 'Test Coverage', value: '94%', target: '90%', status: 'excellent' },
        { metric: 'Cyclomatic Complexity', value: '2.1', target: '<3.0', status: 'excellent' },
        { metric: 'Code Duplication', value: '3%', target: '<5%', status: 'good' },
        { metric: 'Security Issues', value: '0', target: '0', status: 'excellent' }
      ]
    },
    performance: {
      score: 96,
      trend: 'up',
      details: [
        { metric: 'API Response Time P95', value: '48ms', target: '<100ms', status: 'excellent' },
        { metric: 'Error Rate', value: '0.1%', target: '<1%', status: 'excellent' },
        { metric: 'Throughput', value: '30M/day', target: '20M/day', status: 'excellent' },
        { metric: 'Availability', value: '99.9%', target: '99.5%', status: 'excellent' }
      ]
    },
    architecture: {
      score: 89,
      trend: 'up',
      details: [
        { metric: 'Service Coupling', value: 'Low', target: 'Low', status: 'excellent' },
        { metric: 'Data Consistency', value: '99.8%', target: '99%', status: 'excellent' },
        { metric: 'Scalability Index', value: '9.2/10', target: '>8.0', status: 'excellent' },
        { metric: 'Observability Score', value: '85%', target: '80%', status: 'good' }
      ]
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-500'
      case 'good': return 'text-blue-500'
      case 'warning': return 'text-yellow-500'
      case 'poor': return 'text-red-500'
      default: return 'text-slate-400'
    }
  }

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? <TrendingUp className="w-4 h-4 text-green-500" /> : <TrendingDown className="w-4 h-4 text-red-500" />
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <GitPullRequest className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Amin Chouaibi El Azaar</h1>
                <p className="text-slate-400">Senior Software Engineer - Code Review & Architecture</p>
              </div>
            </div>
            <div className="flex space-x-2">
              {[
                { key: 'reviews', label: 'Code Reviews', icon: MessageSquare },
                { key: 'architecture', label: 'Architecture', icon: Server },
                { key: 'metrics', label: 'Quality Metrics', icon: BarChart3 }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === key 
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                      : 'hover:bg-slate-800/50 text-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Code Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Code Reviews & Technical Leadership</h2>
              <div className="text-sm text-slate-400">
                {codeReviews.length} reviews completed • 100% approval rate
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {codeReviews.map((review) => (
                <div key={review.id} className="bg-slate-900/50 border border-slate-700 rounded-lg hover:bg-slate-900/70 transition-colors">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg text-purple-400">{review.title}</h3>
                        <p className="text-sm text-slate-400 mt-1">{review.description}</p>
                      </div>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                        {review.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-400">+{review.linesAdded}</div>
                        <div className="text-xs text-slate-400">Lines Added</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-red-400">-{review.linesRemoved}</div>
                        <div className="text-xs text-slate-400">Lines Removed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-400">{review.comments}</div>
                        <div className="text-xs text-slate-400">Comments</div>
                      </div>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded p-3 mb-4">
                      <div className="text-sm font-semibold text-green-400 mb-1">Impact:</div>
                      <div className="text-sm">{review.impact}</div>
                    </div>

                    <button
                      onClick={() => setSelectedReview(selectedReview === review.id ? null : review.id)}
                      className="w-full bg-slate-800 hover:bg-slate-700 py-2 rounded transition-colors text-sm"
                    >
                      {selectedReview === review.id ? 'Hide Details' : 'View Code Review'}
                    </button>

                    {selectedReview === review.id && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-red-400">Before (Issues Identified):</h4>
                          <pre className="bg-slate-950 p-4 rounded text-xs overflow-x-auto border border-slate-800">
                            <code>{review.before}</code>
                          </pre>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-green-400">After (Recommended Solution):</h4>
                          <pre className="bg-slate-950 p-4 rounded text-xs overflow-x-auto border border-slate-800">
                            <code>{review.after}</code>
                          </pre>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-400">Review Feedback:</h4>
                          <ul className="space-y-1 text-sm">
                            {review.feedback.map((item, index) => (
                              <li key={index} className="text-slate-300">{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Tab */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Architecture Decisions & Technical Strategy</h2>
              <div className="text-sm text-slate-400">
                {architectureDecisions.length} major decisions documented
              </div>
            </div>

            <div className="space-y-6">
              {architectureDecisions.map((decision, index) => (
                <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-purple-400">{decision.title}</h3>
                      <p className="text-slate-400 mt-1">{decision.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs ${ 
                        decision.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                        decision.impact === 'Very High' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {decision.impact} Impact
                      </span>
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                        {decision.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-400 mb-2">✅ Benefits & Reasoning:</h4>
                      <ul className="space-y-1 text-sm">
                        {decision.reasoning.map((reason, i) => (
                          <li key={i} className="text-slate-300">• {reason}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">⚠️ Trade-offs & Considerations:</h4>
                      <ul className="space-y-1 text-sm">
                        {decision.tradeoffs.map((tradeoff, i) => (
                          <li key={i} className="text-slate-300">• {tradeoff}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3">📊 Measured Impact:</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(decision.metrics).map(([metric, value]) => (
                        <div key={metric} className="bg-slate-950/50 border border-slate-600 rounded p-3">
                          <div className="text-xs text-slate-400 mb-1">{metric}</div>
                          <div className="font-semibold text-blue-400">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metrics Tab */}
        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Quality Metrics & Performance</h2>
              <div className="text-sm text-slate-400">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {Object.entries(qualityMetrics).map(([category, data]) => (
                <div key={category} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-400">{data.score}</span>
                      {getTrendIcon(data.trend)}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {data.details.map((detail, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium">{detail.metric}</div>
                          <div className="text-xs text-slate-400">Target: {detail.target}</div>
                        </div>
                        <div className="text-right">
                          <div className={`font-semibold ${getStatusColor(detail.status)}`}>
                            {detail.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">🏆 Technical Leadership Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Code Reviews Completed', value: '200+', icon: GitPullRequest },
                  { label: 'Performance Improvements', value: '94%', icon: Zap },
                  { label: 'Zero-Downtime Deployments', value: '15', icon: Shield },
                  { label: 'Team Mentoring Sessions', value: '50+', icon: Users }
                ].map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CodeReviewPortfolio