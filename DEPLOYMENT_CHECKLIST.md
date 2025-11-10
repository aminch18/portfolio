# Deployment Checklist

Before deploying your SEO-optimized portfolio, verify everything is ready:

## ✅ Pre-Deployment Checklist

### Code Quality
- [ ] No TypeScript errors (`npm run build`)
- [ ] All translations working (test EN/ES/CA)
- [ ] Images loading correctly (education & certificate logos)
- [ ] Theme switcher working (light/dark mode)
- [ ] Language switcher working (EN/ES/CA)
- [ ] Mobile responsive (test on phone)
- [ ] All links working (LinkedIn, GitHub, email)

### SEO Elements
- [ ] Meta tags in `layout.tsx` (title, description, keywords)
- [ ] Structured data in `page.tsx` (JSON-LD)
- [ ] `robots.txt` in `/public`
- [ ] `sitemap.xml` in `/public`
- [ ] Open Graph tags for social sharing
- [ ] Canonical URLs set correctly

### Performance
- [ ] Images optimized
- [ ] No console errors in browser
- [ ] Fast loading (<3 seconds)

## 🚀 Deployment Commands

```bash
# 1. Install dependencies (if needed)
npm install

# 2. Build the static site
npm run build

# 3. Test the production build locally
npx serve out

# 4. If everything works, commit and push
git add .
git commit -m "SEO optimization and i18n support"
git push origin main

# 5. Wait for GitHub Actions to deploy (check Actions tab)
```

## 🔍 Post-Deployment Verification

After deployment completes (usually 2-5 minutes):

### Test the Live Site
- [ ] Visit: https://aminch18.github.io/portfolio
- [ ] Test language switching
- [ ] Test theme switching
- [ ] Test on mobile device
- [ ] Test all navigation links

### Verify SEO Elements
- [ ] View page source and check meta tags
- [ ] Check `https://aminch18.github.io/portfolio/robots.txt`
- [ ] Check `https://aminch18.github.io/portfolio/sitemap.xml`
- [ ] Test Open Graph with: https://www.opengraph.xyz/
- [ ] Test structured data with: https://search.google.com/test/rich-results

### Search Console Setup
1. Go to: https://search.google.com/search-console
2. Add property: `https://aminch18.github.io/portfolio`
3. Verify ownership (HTML tag method)
4. Submit sitemap: `sitemap.xml`
5. Request indexing for main page

## 📊 Monitor Performance

### Week 1
- Check GitHub Actions for successful deployments
- Monitor Google Search Console for verification
- Track initial LinkedIn engagement

### Week 2-3
- Check Search Console for indexation status
- Monitor search queries appearing
- Track page impressions

### Week 4+
- Analyze traffic sources
- Monitor keyword rankings
- Track social media referrals

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

### 404 Errors on GitHub Pages
- Ensure `basePath: '/portfolio'` in `next.config.js`
- Check GitHub Pages settings (should be set to `gh-pages` branch or GitHub Actions)

### Images Not Loading
- Verify images are in `/public` folder
- Check image URLs include `/portfolio` prefix in production

## 🎯 Success Metrics

After 1 month, you should see:
- ✅ Site indexed by Google
- ✅ Appearing in searches for your name
- ✅ Traffic from LinkedIn
- ✅ Profile views from portfolio visitors
- ✅ 50-100+ page views

## 📝 Maintenance

### Monthly
- Update projects section with new work
- Refresh certificates if new ones obtained
- Check for broken links
- Monitor search rankings

### Quarterly
- Review and update meta descriptions
- Add new skills/technologies learned
- Update professional experience
- Refresh sitemap lastmod date
