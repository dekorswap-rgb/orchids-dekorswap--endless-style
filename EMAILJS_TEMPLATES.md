# 📧 EmailJS Templates for DekorSwap

Complete email templates for both forms (Contact & Get Started) with business and customer versions.

---

## 📋 Template Overview

You need to create **4 templates** in EmailJS:

| Template ID | Purpose | Recipient | Form Source |
|-------------|---------|-----------|-------------|
| `template_s5u472g` | Business inquiry | dekorswap@gmail.com | Both forms |
| `template_or9livy` | Customer confirmation | User's email | Both forms |
| `template_contact_business` | Contact form inquiry | dekorswap@gmail.com | Contact form |
| `template_getstarted_business` | Get Started inquiry | dekorswap@gmail.com | Get Started form |

> **Note**: Currently both forms use the same templates. You can either:
> - Keep using the same templates (simpler)
> - Create separate templates for better customization (recommended below)

---

## 🎯 Template 1: Contact Form - Business Email

**Template Name**: Contact Form Business Inquiry  
**Template ID**: `template_contact_business` (or use existing `template_s5u472g`)  
**To Email**: dekorswap@gmail.com

### **Subject Line**:
```
New Contact Form Inquiry: {{subject}}
```

### **HTML Body**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
            border-bottom: 3px solid #C97C5D;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            margin: 0;
            color: #2D3142;
            font-size: 24px;
        }
        .badge {
            display: inline-block;
            background-color: #C97C5D;
            color: white;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 10px;
        }
        .field {
            margin-bottom: 24px;
        }
        .field-label {
            font-weight: 600;
            color: #2D3142;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            display: block;
        }
        .field-value {
            background-color: #f8f9fa;
            padding: 14px 18px;
            border-radius: 10px;
            border-left: 4px solid #C97C5D;
            font-size: 15px;
            color: #2D3142;
        }
        .message-box {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #C97C5D;
            margin-top: 10px;
            white-space: pre-wrap;
            font-size: 15px;
            line-height: 1.8;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            text-align: center;
            color: #666;
            font-size: 13px;
        }
        .timestamp {
            color: #999;
            font-size: 12px;
            margin-top: 20px;
        }
        .action-required {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 16px;
            border-radius: 8px;
            margin-top: 30px;
        }
        .action-required strong {
            color: #856404;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📬 New Contact Form Submission</h1>
            <span class="badge">Contact Form</span>
        </div>

        <div class="field">
            <span class="field-label">👤 From</span>
            <div class="field-value">{{from_name}}</div>
        </div>

        <div class="field">
            <span class="field-label">📧 Email Address</span>
            <div class="field-value">
                <a href="mailto:{{from_email}}" style="color: #C97C5D; text-decoration: none;">{{from_email}}</a>
            </div>
        </div>

        <div class="field">
            <span class="field-label">📌 Subject</span>
            <div class="field-value">{{subject}}</div>
        </div>

        <div class="field">
            <span class="field-label">💬 Message</span>
            <div class="message-box">{{message}}</div>
        </div>

        <div class="action-required">
            <strong>⚡ Action Required:</strong> Please respond to this inquiry within 24 hours.
        </div>

        <div class="timestamp">
            📅 Received: {{timestamp}}
        </div>

        <div class="footer">
            <p><strong>DekorSwap</strong> - Endless Style</p>
            <p style="margin: 5px 0;">Raipur, Chhattisgarh, India</p>
            <p style="margin: 5px 0;">dekorswap@gmail.com | +91 9996234649</p>
        </div>
    </div>
</body>
</html>
```

### **Variables Used**:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{subject}}` - Inquiry subject
- `{{message}}` - Customer's message
- `{{timestamp}}` - Submission timestamp

---

## 🎯 Template 2: Contact Form - Customer Confirmation

**Template Name**: Contact Form Customer Confirmation  
**Template ID**: `template_or9livy` (or create new one)  
**To Email**: {{to_email}} (customer's email)

### **Subject Line**:
```
We received your message - DekorSwap
```

### **HTML Body**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        .checkmark {
            width: 80px;
            height: 80px;
            background-color: #4CAF50;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 48px;
        }
        .header h1 {
            color: #2D3142;
            font-size: 28px;
            margin: 0 0 10px 0;
        }
        .header p {
            color: #666;
            font-size: 16px;
            margin: 0;
        }
        .content {
            margin: 30px 0;
        }
        .greeting {
            font-size: 18px;
            color: #2D3142;
            margin-bottom: 20px;
        }
        .message-summary {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 12px;
            border-left: 4px solid #C97C5D;
            margin: 20px 0;
        }
        .message-summary h3 {
            margin: 0 0 10px 0;
            color: #2D3142;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .message-summary p {
            margin: 0;
            color: #666;
            font-size: 15px;
            line-height: 1.6;
        }
        .info-box {
            background-color: #e3f2fd;
            border-left: 4px solid #2196F3;
            padding: 16px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .info-box p {
            margin: 0;
            color: #1565C0;
            font-size: 14px;
        }
        .cta-button {
            display: inline-block;
            background-color: #C97C5D;
            color: white;
            padding: 14px 32px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            margin: 20px 0;
            text-align: center;
        }
        .contact-info {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 12px;
            margin-top: 30px;
        }
        .contact-info h3 {
            margin: 0 0 15px 0;
            color: #2D3142;
            font-size: 16px;
        }
        .contact-info p {
            margin: 8px 0;
            color: #666;
            font-size: 14px;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            text-align: center;
            color: #999;
            font-size: 12px;
        }
        .social-links {
            margin: 20px 0;
            text-align: center;
        }
        .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #C97C5D;
            text-decoration: none;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="checkmark">✓</div>
            <h1>Message Received!</h1>
            <p>We'll get back to you soon</p>
        </div>

        <div class="content">
            <p class="greeting">Hi {{to_name}},</p>
            
            <p>Thank you for reaching out to <strong>DekorSwap</strong>! We've successfully received your message and our team will review it shortly.</p>

            <div class="message-summary">
                <h3>📌 Your Inquiry</h3>
                <p><strong>Subject:</strong> {{subject}}</p>
                <p style="margin-top: 10px;"><strong>Message:</strong><br>{{message_preview}}</p>
            </div>

            <div class="info-box">
                <p><strong>⏱️ Response Time:</strong> We typically respond within 24 hours during business days.</p>
            </div>

            <p>In the meantime, feel free to explore our website to learn more about our décor subscription plans:</p>

            <div style="text-align: center;">
                <a href="https://dekorswap-rgb.github.io/dekor-swap/" class="cta-button">Visit Our Website</a>
            </div>

            <div class="contact-info">
                <h3>📞 Need Immediate Assistance?</h3>
                <p><strong>Email:</strong> dekorswap@gmail.com</p>
                <p><strong>Phone:</strong> +91 9996234649 | +91 9131437446</p>
                <p><strong>Location:</strong> Raipur, Chhattisgarh, India</p>
            </div>
        </div>

        <div class="social-links">
            <a href="#">Instagram</a> • 
            <a href="#">Facebook</a> • 
            <a href="#">Twitter</a>
        </div>

        <div class="footer">
            <p><strong>DekorSwap</strong> - Endless Style</p>
            <p>Curated home décor delivered monthly</p>
            <p style="margin-top: 15px; color: #ccc;">This is an automated confirmation email. Please do not reply to this message.</p>
        </div>
    </div>
</body>
</html>
```

### **Variables Used**:
- `{{to_name}}` - Customer's name
- `{{to_email}}` - Customer's email (set in EmailJS "To Email" field)
- `{{subject}}` - Their inquiry subject
- `{{message_preview}}` - Preview of their message (first 100 chars)

---

## 🎯 Template 3: Get Started Form - Business Email

**Template Name**: Get Started Form Business Inquiry  
**Template ID**: `template_getstarted_business` (or use existing `template_s5u472g`)  
**To Email**: dekorswap@gmail.com

### **Subject Line**:
```
🎉 New Get Started Form Submission from {{from_name}}
```

### **HTML Body**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #C97C5D 0%, #2D3142 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            margin: -40px -40px 30px -40px;
        }
        .header h1 {
            margin: 0 0 10px 0;
            font-size: 26px;
        }
        .badge {
            display: inline-block;
            background-color: rgba(255,255,255,0.2);
            color: white;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .priority-tag {
            background-color: #ff6b6b;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: bold;
            display: inline-block;
            margin-bottom: 20px;
        }
        .section {
            margin-bottom: 30px;
        }
        .section-title {
            font-weight: 700;
            color: #2D3142;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #C97C5D;
        }
        .field {
            margin-bottom: 16px;
            display: flex;
            align-items: baseline;
        }
        .field-label {
            font-weight: 600;
            color: #666;
            font-size: 13px;
            min-width: 150px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .field-value {
            color: #2D3142;
            font-size: 15px;
            font-weight: 500;
        }
        .highlight-box {
            background: linear-gradient(135deg, #fff5f0 0%, #ffe8dc 100%);
            padding: 20px;
            border-radius: 12px;
            border-left: 5px solid #C97C5D;
            margin: 20px 0;
        }
        .highlight-box h3 {
            margin: 0 0 12px 0;
            color: #C97C5D;
            font-size: 18px;
        }
        .highlight-box .big-number {
            font-size: 32px;
            font-weight: 800;
            color: #C97C5D;
            margin: 10px 0;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }
        .tag {
            background-color: #e3f2fd;
            color: #1976d2;
            padding: 6px 14px;
            border-radius: 16px;
            font-size: 13px;
            font-weight: 600;
        }
        .action-section {
            background-color: #fff3cd;
            border-left: 5px solid #ffc107;
            padding: 20px;
            border-radius: 8px;
            margin-top: 30px;
        }
        .action-section h3 {
            margin: 0 0 10px 0;
            color: #856404;
            font-size: 16px;
        }
        .action-section ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        .action-section li {
            color: #856404;
            margin: 6px 0;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            text-align: center;
            color: #666;
            font-size: 13px;
        }
        .timestamp {
            color: #999;
            font-size: 12px;
            text-align: right;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 New Customer Inquiry!</h1>
            <span class="badge">Get Started Form</span>
        </div>

        <div class="priority-tag">⚡ HIGH PRIORITY - New Lead</div>

        <div class="section">
            <div class="section-title">👤 Customer Information</div>
            <div class="field">
                <span class="field-label">Name:</span>
                <span class="field-value">{{from_name}}</span>
            </div>
            <div class="field">
                <span class="field-label">Email:</span>
                <span class="field-value">
                    <a href="mailto:{{from_email}}" style="color: #C97C5D; text-decoration: none;">{{from_email}}</a>
                </span>
            </div>
            <div class="field">
                <span class="field-label">Phone:</span>
                <span class="field-value">{{phone}}</span>
            </div>
            {{#whatsapp}}
            <div class="field">
                <span class="field-label">WhatsApp:</span>
                <span class="field-value">
                    <a href="https://wa.me/{{whatsapp}}" style="color: #25D366; text-decoration: none;">{{whatsapp}} 💬</a>
                </span>
            </div>
            {{/whatsapp}}
        </div>

        <div class="highlight-box">
            <h3>💰 Monthly Budget</h3>
            <div class="big-number">{{monthly_budget}}</div>
        </div>

        <div class="section">
            <div class="section-title">🛋️ Rental Preferences</div>
            <div class="field">
                <span class="field-label">Items Interested:</span>
            </div>
            <div class="tags">
                {{#rental_items}}
                <span class="tag">{{.}}</span>
                {{/rental_items}}
            </div>
        </div>

        <div class="section">
            <div class="section-title">📍 Usage Location</div>
            <div class="tags">
                {{#usage_location}}
                <span class="tag">{{.}}</span>
                {{/usage_location}}
            </div>
        </div>

        {{#additional_comments}}
        <div class="section">
            <div class="section-title">💬 Additional Comments</div>
            <div style="background-color: #f8f9fa; padding: 16px; border-radius: 8px; border-left: 4px solid #C97C5D;">
                {{additional_comments}}
            </div>
        </div>
        {{/additional_comments}}

        <div class="action-section">
            <h3>⚡ Next Steps:</h3>
            <ul>
                <li>Review customer preferences and budget</li>
                <li>Prepare personalized plan recommendation</li>
                <li>Contact within 24 hours via email or WhatsApp</li>
                <li>Schedule styling consultation if needed</li>
            </ul>
        </div>

        <div class="timestamp">
            📅 Submitted: {{timestamp}}
        </div>

        <div class="footer">
            <p><strong>DekorSwap</strong> - Endless Style</p>
            <p style="margin: 5px 0;">Internal Business Email</p>
        </div>
    </div>
</body>
</html>
```

### **Variables Used**:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Phone number
- `{{whatsapp}}` - WhatsApp number (optional)
- `{{monthly_budget}}` - Selected budget (₹499 or ₹1499)
- `{{rental_items}}` - Array of selected items (use loop)
- `{{usage_location}}` - Array of locations (use loop)
- `{{additional_comments}}` - Optional comments
- `{{timestamp}}` - Submission time

---

## 🎯 Template 4: Get Started Form - Customer Confirmation

**Template Name**: Get Started Customer Confirmation  
**Template ID**: Create new `template_getstarted_customer`  
**To Email**: {{to_email}} (customer's email)

### **Subject Line**:
```
Welcome to DekorSwap! Your inquiry is confirmed 🎉
```

### **HTML Body**:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .hero {
            background: linear-gradient(135deg, #C97C5D 0%, #2D3142 100%);
            color: white;
            padding: 50px 40px;
            text-align: center;
        }
        .hero h1 {
            margin: 0 0 10px 0;
            font-size: 32px;
        }
        .hero p {
            margin: 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .checkmark-circle {
            width: 80px;
            height: 80px;
            background-color: rgba(255,255,255,0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 48px;
        }
        .content {
            padding: 40px;
        }
        .greeting {
            font-size: 20px;
            color: #2D3142;
            margin-bottom: 20px;
            font-weight: 600;
        }
        .summary-box {
            background: linear-gradient(135deg, #fff5f0 0%, #ffe8dc 100%);
            padding: 25px;
            border-radius: 12px;
            margin: 25px 0;
            border-left: 5px solid #C97C5D;
        }
        .summary-box h3 {
            margin: 0 0 15px 0;
            color: #C97C5D;
            font-size: 18px;
        }
        .summary-item {
            display: flex;
            margin: 12px 0;
            align-items: baseline;
        }
        .summary-label {
            font-weight: 600;
            color: #666;
            min-width: 140px;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .summary-value {
            color: #2D3142;
            font-weight: 500;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }
        .tag {
            background-color: white;
            color: #C97C5D;
            padding: 6px 14px;
            border-radius: 16px;
            font-size: 13px;
            font-weight: 600;
            border: 2px solid #C97C5D;
        }
        .info-box {
            background-color: #e3f2fd;
            border-left: 5px solid #2196F3;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
        }
        .info-box h3 {
            margin: 0 0 10px 0;
            color: #1565C0;
            font-size: 16px;
        }
        .info-box p {
            margin: 8px 0;
            color: #1976d2;
            font-size: 14px;
        }
        .cta-button {
            display: block;
            background-color: #C97C5D;
            color: white;
            padding: 16px 32px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 700;
            text-align: center;
            margin: 30px 0;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        .cta-button:hover {
            background-color: #b36b4d;
        }
        .features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 30px 0;
        }
        .feature-item {
            background-color: #f8f9fa;
            padding: 16px;
            border-radius: 10px;
            text-align: center;
        }
        .feature-item .icon {
            font-size: 32px;
            margin-bottom: 8px;
        }
        .feature-item .title {
            font-weight: 600;
            color: #2D3142;
            font-size: 14px;
            margin-bottom: 4px;
        }
        .feature-item .desc {
            color: #666;
            font-size: 12px;
        }
        .contact-section {
            background-color: #f8f9fa;
            padding: 25px;
            border-radius: 12px;
            margin-top: 30px;
        }
        .contact-section h3 {
            margin: 0 0 15px 0;
            color: #2D3142;
            font-size: 18px;
        }
        .contact-item {
            margin: 10px 0;
            color: #666;
            font-size: 14px;
        }
        .contact-item a {
            color: #C97C5D;
            text-decoration: none;
            font-weight: 600;
        }
        .social-links {
            text-align: center;
            margin: 30px 0;
        }
        .social-links a {
            display: inline-block;
            margin: 0 12px;
            color: #C97C5D;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
        }
        .footer {
            background-color: #2D3142;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .footer p {
            margin: 8px 0;
            font-size: 13px;
            opacity: 0.8;
        }
        .footer .tagline {
            color: #C97C5D;
            font-weight: 700;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <div class="checkmark-circle">✓</div>
            <h1>Welcome to DekorSwap!</h1>
            <p>Your journey to endless style begins here</p>
        </div>

        <div class="content">
            <p class="greeting">Hi {{to_name}}! 👋</p>
            
            <p>Thank you for your interest in <strong>DekorSwap</strong>! We're thrilled that you're considering transforming your space with our curated décor subscription.</p>

            <div class="summary-box">
                <h3>📋 Your Preferences</h3>
                <div class="summary-item">
                    <span class="summary-label">Budget:</span>
                    <span class="summary-value"><strong>{{monthly_budget}}/month</strong></span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Items:</span>
                </div>
                <div class="tags">
                    {{#rental_items}}
                    <span class="tag">{{.}}</span>
                    {{/rental_items}}
                </div>
                <div class="summary-item" style="margin-top: 15px;">
                    <span class="summary-label">Location:</span>
                </div>
                <div class="tags">
                    {{#usage_location}}
                    <span class="tag">{{.}}</span>
                    {{/usage_location}}
                </div>
            </div>

            <div class="info-box">
                <h3>⏱️ What Happens Next?</h3>
                <p><strong>1.</strong> Our team will review your preferences</p>
                <p><strong>2.</strong> We'll prepare a personalized plan recommendation</p>
                <p><strong>3.</strong> Expect to hear from us within <strong>24 hours</strong></p>
                <p><strong>4.</strong> We'll schedule a quick styling consultation (optional)</p>
            </div>

            <a href="https://dekorswap-rgb.github.io/dekor-swap/pricing" class="cta-button">
                View Our Plans →
            </a>

            <div class="features">
                <div class="feature-item">
                    <div class="icon">🔄</div>
                    <div class="title">Free Swaps</div>
                    <div class="desc">Change items monthly</div>
                </div>
                <div class="feature-item">
                    <div class="icon">🌿</div>
                    <div class="title">Eco-Friendly</div>
                    <div class="desc">100% circular</div>
                </div>
                <div class="feature-item">
                    <div class="icon">✨</div>
                    <div class="title">Curated</div>
                    <div class="desc">Designer-picked</div>
                </div>
                <div class="feature-item">
                    <div class="icon">🚫</div>
                    <div class="title">No Commitment</div>
                    <div class="desc">Cancel anytime</div>
                </div>
            </div>

            <div class="contact-section">
                <h3>📞 Questions? We're Here to Help!</h3>
                <div class="contact-item">
                    <strong>Email:</strong> <a href="mailto:dekorswap@gmail.com">dekorswap@gmail.com</a>
                </div>
                <div class="contact-item">
                    <strong>Phone:</strong> <a href="tel:+919996234649">+91 9996234649</a> | <a href="tel:+919131437446">+91 9131437446</a>
                </div>
                {{#whatsapp}}
                <div class="contact-item">
                    <strong>WhatsApp:</strong> <a href="https://wa.me/{{whatsapp}}">Chat with us 💬</a>
                </div>
                {{/whatsapp}}
                <div class="contact-item">
                    <strong>Location:</strong> Raipur, Chhattisgarh, India
                </div>
            </div>

            <div class="social-links">
                <p style="margin-bottom: 15px; color: #666; font-size: 14px;">Follow our journey:</p>
                <a href="#">Instagram</a> • 
                <a href="#">Facebook</a> • 
                <a href="#">Twitter</a>
            </div>
        </div>

        <div class="footer">
            <p class="tagline">DekorSwap - Endless Style</p>
            <p>Curated home décor delivered monthly</p>
            <p>Raipur, Chhattisgarh, India</p>
            <p style="margin-top: 20px; font-size: 11px; opacity: 0.6;">
                This is an automated confirmation email. Please do not reply to this message.
            </p>
        </div>
    </div>
</body>
</html>
```

### **Variables Used**:
- `{{to_name}}` - Customer's name
- `{{to_email}}` - Customer's email (set in "To Email" field)
- `{{monthly_budget}}` - Selected budget
- `{{rental_items}}` - Array of items (requires loop syntax)
- `{{usage_location}}` - Array of locations (requires loop syntax)
- `{{whatsapp}}` - WhatsApp number (optional, use conditional)

---

## 🔧 EmailJS Setup Instructions

### **Step 1: Create Email Service**
1. Go to EmailJS Dashboard → Email Services
2. Connect your Gmail (dekorswap@gmail.com)
3. Note the Service ID: `service_skohlrk`

### **Step 2: Create Templates**

For each template above:

1. Go to Email Templates → Create New Template
2. Set **Template Name** (from above)
3. Set **Subject** (from above)
4. In **"To Email"** field:
   - For business templates: `dekorswap@gmail.com`
   - For customer templates: `{{to_email}}`
5. Paste the **HTML Body** (from above)
6. Click **Save**
7. Copy the **Template ID**

### **Step 3: Update Code (if needed)**

If you create new template IDs, update these files:

**Contact Form** (`src/app/contact/page.tsx`):
```typescript
const EMAILJS_TEMPLATE_ID_CONTACT = "your_new_business_template_id";
const EMAILJS_CUSTOMER_TEMPLATE_ID = "your_new_customer_template_id";
```

**Get Started Form** (`src/app/get-started/page.tsx`):
```typescript
const EMAILJS_TEMPLATE_ID = "your_new_business_template_id";
const EMAILJS_CUSTOMER_TEMPLATE_ID = "your_new_customer_template_id";
```

---

## 📝 Variable Mapping Reference

### **Contact Form Variables**:
| Code Variable | EmailJS Variable | Description |
|---------------|------------------|-------------|
| `formData.name` | `{{from_name}}` | Customer name |
| `formData.email` | `{{from_email}}` | Customer email |
| `formData.subject` | `{{subject}}` | Inquiry subject |
| `formData.message` | `{{message}}` | Full message |
| `new Date().toLocaleString()` | `{{timestamp}}` | Submission time |
| `formData.name` | `{{to_name}}` | For customer email |
| `formData.email` | `{{to_email}}` | For customer email |
| `formData.message.substring(0,100)` | `{{message_preview}}` | Message preview |

### **Get Started Form Variables**:
| Code Variable | EmailJS Variable | Description |
|---------------|------------------|-------------|
| `formData.name` | `{{from_name}}` | Customer name |
| `formData.email` | `{{from_email}}` | Customer email |
| `formData.phone` | `{{phone}}` | Phone number |
| `formData.whatsapp` | `{{whatsapp}}` | WhatsApp (optional) |
| `formData.rentalItems.join(", ")` | `{{rental_items}}` | Selected items |
| `formData.monthlyBudget` | `{{monthly_budget}}` | Budget choice |
| `formData.usageLocation.join(", ")` | `{{usage_location}}` | Locations |
| `formData.additionalComments` | `{{additional_comments}}` | Comments |
| `new Date().toLocaleString()` | `{{timestamp}}` | Submission time |

---

## ✅ Testing Checklist

After setting up templates:

- [ ] Test contact form submission
- [ ] Verify business email received at dekorswap@gmail.com
- [ ] Verify customer confirmation email received
- [ ] Check all variables populate correctly
- [ ] Test get-started form submission
- [ ] Verify business email with all preferences
- [ ] Verify customer welcome email
- [ ] Check mobile email rendering
- [ ] Test with/without optional fields (WhatsApp, comments)

---

## 🎨 Customization Tips

1. **Colors**: Replace `#C97C5D` (terracotta) and `#2D3142` (charcoal) with your brand colors
2. **Logo**: Add your logo image URL in the header
3. **Social Links**: Update placeholder `#` links with actual URLs
4. **Response Time**: Adjust "24 hours" to your actual response time
5. **Promo Codes**: Add special offers in customer emails

---

**Ready to copy-paste into EmailJS!** 🚀
