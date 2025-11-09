# Email Backend Setup Guide

## Overview

The iSIGN Color Selector now includes a fully functional email backend that automatically sends sample request PDFs to `submittal@isigninc.com` when users submit their color selections.

## How It Works

### User Flow

1. User selects up to 5 colors from the color charts
2. User clicks "Request Sample" button
3. User fills in the form with:
   - Project Name
   - Architect Name
   - Address
   - Phone Number
4. User clicks "Submit Request"
5. System generates a professional PDF with color swatches and project details
6. PDF is automatically downloaded to user's device
7. Email is sent to `submittal@isigninc.com` with the PDF attached

### Technical Implementation

**Frontend (`client/src/components/RequestSampleDialog.tsx`):**
- Collects project information from user
- Generates PDF using jsPDF library with color swatches
- Converts PDF to base64 format
- Calls backend API via tRPC to send email
- Downloads PDF locally for user's records

**Backend (`server/routers.ts` + `server/email.ts`):**
- Receives sample request data and PDF from frontend
- Uses Resend email service to send professional HTML email
- Attaches PDF to email
- Sends to `submittal@isigninc.com`

## Resend Email Service

### Why Resend?

- **Simple API:** Easy to integrate and use
- **Reliable:** High deliverability rates
- **Free Tier:** 100 emails/day for free (perfect for sample requests)
- **Professional:** Supports HTML emails and attachments

### Getting Your API Key

1. Visit [resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to "API Keys" in the dashboard
4. Click "Create API Key"
5. Name it (e.g., "iSIGN Color Selector")
6. Select "Sending access" permission
7. Copy the API key (starts with `re_`)
8. Add it to your project secrets in the Management Dashboard

### Email Configuration

**From Address:** `iSIGN Color Selector <noreply@manus.space>`
**To Address:** `submittal@isigninc.com`
**Subject:** `Sample Request: [Project Name]`

### Domain Verification (Optional for Production)

For production use with your own domain:

1. Go to Resend dashboard → Domains
2. Add your domain (e.g., `isigninc.com`)
3. Add the provided DNS records to your domain registrar
4. Wait for verification (usually 5-15 minutes)
5. Update the `from` address in `server/email.ts` to use your domain

## Testing the Email Functionality

### Test Locally

1. Ensure `RESEND_API_KEY` is set in your environment
2. Run the development server: `pnpm dev`
3. Open the application in your browser
4. Select 1-5 colors
5. Click "Request Sample"
6. Fill in the form with test data
7. Submit and check that:
   - PDF downloads successfully
   - Success toast appears
   - Email arrives at `submittal@isigninc.com`

### Troubleshooting

**Error: "Missing API key"**
- Make sure `RESEND_API_KEY` is set in environment variables
- Restart the development server after adding the key

**Error: "Failed to send email"**
- Check that your Resend API key is valid
- Verify you haven't exceeded the free tier limit (100 emails/day)
- Check Resend dashboard for error logs

**Email not received:**
- Check spam/junk folder
- Verify the recipient email address in `server/email.ts`
- Check Resend dashboard logs for delivery status

## Customization

### Change Recipient Email

Edit `server/email.ts`, line with `to:` field:

```typescript
to: 'your-email@example.com',  // Change this
```

### Customize Email Template

Edit the `emailHtml` variable in `server/email.ts` to modify the email content and styling.

### Change From Address

After verifying your domain in Resend, update the `from` field in `server/email.ts`:

```typescript
from: 'Your Name <noreply@yourdomain.com>',
```

## Production Deployment

1. Set `RESEND_API_KEY` in your production environment variables
2. Verify your sending domain in Resend (recommended)
3. Update the `from` address to use your verified domain
4. Test thoroughly before going live
5. Monitor Resend dashboard for email delivery metrics

## Cost Considerations

**Resend Free Tier:**
- 100 emails per day
- 3,000 emails per month
- Perfect for most sample request volumes

**Paid Plans (if needed):**
- Pro: $20/month for 50,000 emails
- Scale as needed

## Support

For Resend-specific issues:
- Documentation: [resend.com/docs](https://resend.com/docs)
- Support: support@resend.com

For application issues:
- Check the browser console for errors
- Check server logs for backend errors
- Review this guide for configuration issues
