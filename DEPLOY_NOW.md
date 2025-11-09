# Deploy Your iSIGN Color Selector - Step by Step

You've created your GitHub repository! Now follow these exact steps to deploy.

## Step 1: Push Your Code to GitHub

Open your terminal and run these commands **one by one** in the project directory:

```bash
# Navigate to your project
cd /home/ubuntu/isign-color-selector

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit - iSIGN Color Selector with email backend"

# Add your GitHub repository as remote
git remote add origin https://github.com/morgansameh-crypto/iSIGN-Color-Selector.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** You may need to authenticate with GitHub. If prompted, use your GitHub username and a Personal Access Token (not your password).

### How to Create a Personal Access Token (if needed):

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "iSIGN Deploy"
4. Select scopes: `repo` (all checkboxes under it)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)
7. Use this token as your password when pushing

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Website (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In" (use GitHub to sign in)
3. Click "Add New Project"
4. Click "Import" next to your `iSIGN-Color-Selector` repository
5. Vercel will auto-detect the settings
6. **Before deploying**, add environment variable:
   - Click "Environment Variables"
   - Name: `RESEND_API_KEY`
   - Value: `re_your_actual_resend_api_key`
   - Select all environments (Production, Preview, Development)
7. Click "Deploy"
8. Wait 2-3 minutes
9. Your site will be live! 🎉

### Option B: Deploy via Command Line

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? isign-color-selector
# - Directory? ./
# - Override settings? No

# Add environment variable
vercel env add RESEND_API_KEY

# Deploy to production
vercel --prod
```

## Step 3: Verify Everything Works

After deployment, test your live site:

1. Visit your Vercel URL (e.g., `https://isign-color-selector.vercel.app`)
2. Select 1-5 colors
3. Click "Request Sample"
4. Fill in the form with test data
5. Submit
6. Verify:
   - ✅ PDF downloads
   - ✅ Success message appears
   - ✅ Check submittal@isigninc.com for the email

## Step 4: Set Up Custom Domain (Optional)

To use `colors.isigninc.com` or similar:

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow DNS instructions
5. Wait 5-30 minutes for DNS propagation

## Troubleshooting

### "Permission denied" when pushing to GitHub

**Solution:** You need to authenticate. Use a Personal Access Token instead of your password (see instructions above).

### "Repository not found"

**Solution:** Make sure you're using the correct repository URL:
```bash
git remote set-url origin https://github.com/morgansameh-crypto/iSIGN-Color-Selector.git
```

### Build fails on Vercel

**Solution:** Check that all files are pushed to GitHub:
```bash
git status
git add .
git commit -m "Add missing files"
git push
```

### Email not sending

**Solution:** 
1. Verify `RESEND_API_KEY` is set in Vercel environment variables
2. Redeploy after adding the key
3. Check Resend dashboard for error logs

## Need Your Resend API Key?

If you don't have it yet:

1. Go to [resend.com](https://resend.com)
2. Sign up (free)
3. Go to "API Keys"
4. Create new key
5. Copy it (starts with `re_`)
6. Add it to Vercel environment variables

## What Happens Next?

- ✅ Every time you push to GitHub, Vercel auto-deploys
- ✅ You get a live URL instantly
- ✅ HTTPS is automatic
- ✅ Email functionality works perfectly
- ✅ No server management needed

## Quick Reference

**Your GitHub Repo:** https://github.com/morgansameh-crypto/iSIGN-Color-Selector

**Vercel Dashboard:** https://vercel.com/dashboard

**After deployment, your site will be at:** `https://isign-color-selector.vercel.app` (or similar)

---

**Ready to deploy?** Start with Step 1 above! 🚀
