# Vercel Deployment Guide for iSIGN Color Selector

This guide will help you deploy the iSIGN Color Selector with **full email functionality** to Vercel.

## Why Vercel?

✅ **Supports Node.js backend** - Email functionality will work
✅ **Free tier available** - Perfect for production use
✅ **Automatic HTTPS** - Secure by default
✅ **Git integration** - Auto-deploy on push
✅ **Fast global CDN** - Quick loading worldwide
✅ **Easy environment variables** - Simple secret management

## Prerequisites

1. A GitHub account
2. A Vercel account (free) - Sign up at [vercel.com](https://vercel.com)
3. Your Resend API key (from [resend.com](https://resend.com))

## Step-by-Step Deployment

### Step 1: Push Code to GitHub

1. Create a new repository on GitHub
2. In your local project terminal, run:

```bash
git init
git add .
git commit -m "Initial commit - iSIGN Color Selector"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the configuration

### Step 3: Configure Environment Variables

Before deploying, add your environment variables:

1. In the Vercel project settings, go to "Environment Variables"
2. Add the following variable:

```
Name: RESEND_API_KEY
Value: re_your_actual_api_key_here
```

3. Select all environments (Production, Preview, Development)
4. Click "Save"

### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at `https://your-project-name.vercel.app`

### Step 5: Test Email Functionality

1. Visit your deployed site
2. Select 1-5 colors
3. Click "Request Sample"
4. Fill in the form
5. Submit and verify:
   - PDF downloads
   - Email arrives at submittal@isigninc.com

## Custom Domain (Optional)

To use your own domain (e.g., colors.isigninc.com):

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:

- Deploy every push to the `main` branch (Production)
- Create preview deployments for pull requests
- Run builds and tests before deploying

## Monitoring and Logs

View your application logs in Vercel:

1. Go to your project dashboard
2. Click "Deployments"
3. Click on any deployment
4. View "Functions" logs to see email sending activity

## Troubleshooting

### Build Fails

**Error: "Command failed: pnpm run build"**
- Check that all dependencies are in package.json
- Verify the build works locally first

**Solution:**
```bash
# Test locally
pnpm install
pnpm run build
```

### Email Not Sending

**Error: "Missing API key"**
- Verify RESEND_API_KEY is set in Vercel environment variables
- Redeploy after adding environment variables

**Error: "Failed to send email"**
- Check Resend dashboard for error logs
- Verify you haven't exceeded free tier limits (100 emails/day)
- Check that recipient email is correct in server/email.ts

### 404 Errors on Routes

**Issue: Direct URL access returns 404**
- This is already handled by vercel.json rewrites
- If still occurring, check that vercel.json is in the root directory

## Environment Variables Reference

Required variables for production:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

Optional variables (auto-injected by the platform):

- DATABASE_URL (if using database features)
- JWT_SECRET (if using authentication)
- All other VITE_* variables

## Cost Estimate

**Vercel Free Tier:**
- 100 GB bandwidth/month
- 100 serverless function executions/day
- Unlimited projects
- **Perfect for most sample request volumes**

**Pro Plan ($20/month):**
- 1 TB bandwidth
- Unlimited function executions
- Team collaboration
- Advanced analytics

## Performance Optimization

Your application is already optimized, but for even better performance:

1. **Enable Vercel Analytics** (free)
   - Add `@vercel/analytics` package
   - Track page views and performance

2. **Enable Edge Functions** (optional)
   - Move API routes to edge for faster response times
   - Requires code modifications

3. **Image Optimization**
   - Use Vercel's Image Optimization API
   - Automatically serves WebP format

## Security Best Practices

✅ **Already Implemented:**
- HTTPS by default
- Environment variables for secrets
- CORS configuration
- Input validation

🔒 **Additional Recommendations:**
- Enable Vercel's DDoS protection
- Set up rate limiting for API endpoints
- Monitor function logs for suspicious activity

## Support Resources

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## Quick Commands

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy from command line
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs

# Open project in browser
vercel open
```

## Comparison: Vercel vs Other Platforms

| Feature | Vercel | Netlify | Railway | Render |
|---------|--------|---------|---------|--------|
| Node.js Backend | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes |
| Free Tier | ✅ Generous | ✅ Limited | ✅ $5 credit | ✅ Limited |
| Auto Deploy | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| Custom Domain | ✅ Free | ✅ Free | ✅ Free | ✅ Free |
| Ease of Use | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

**Recommendation:** Vercel is the best choice for this application.

## Next Steps After Deployment

1. ✅ Test all features thoroughly
2. ✅ Set up custom domain
3. ✅ Monitor email delivery in Resend dashboard
4. ✅ Share the live URL with your team
5. ✅ Set up Vercel Analytics for usage tracking

---

**Need Help?** Check the EMAIL_SETUP_GUIDE.md for email-specific configuration.
