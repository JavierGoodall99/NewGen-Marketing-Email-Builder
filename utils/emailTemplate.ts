import { EmailData } from "../types";

export const generateEmailHtml = (data: EmailData): string => {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no"/>
    <meta name="x-apple-disable-message-reformatting" />
    
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style type="text/css">
        /* CLIENT RESETS */
        #outlook a { padding: 0; }
        body { margin: 0 !important; padding: 0 !important; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }
        
        /* TYPOGRAPHY */
        .font-display { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; }
        .font-body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; }
        
        /* HOVER EFFECTS */
        .btn-primary:hover { 
            background: linear-gradient(135deg, #707dfc 0%, #555dfc 100%) !important;
            box-shadow: 0 8px 32px rgba(112, 125, 252, 0.4) !important;
        }
        .social-icon:hover { opacity: 0.8; background: rgba(112, 125, 252, 0.15) !important; }
        
        /* ========================================
           MOBILE RESPONSIVE - ALL SCREEN SIZES
        ======================================== */
        
        /* Tablets and small desktops */
        @media only screen and (max-width: 620px) {
            .wrapper { width: 100% !important; }
            .container { width: 100% !important; max-width: 100% !important; }
            .mobile-pad { padding-left: 24px !important; padding-right: 24px !important; }
            .mobile-pad-lg { padding-left: 20px !important; padding-right: 20px !important; }
            
            /* Typography - Tablet */
            .hero-headline { font-size: 32px !important; line-height: 1.25 !important; }
            .body-text { font-size: 16px !important; line-height: 1.7 !important; }
            
            /* Metrics - Full width stacked */
            .metric-wrapper { padding: 0 16px 48px 16px !important; }
            .metric-table { border-left: 0 !important; border-right: 0 !important; border-radius: 12px !important; }
            .metric-row { display: block !important; width: 100% !important; }
            .metric-cell { 
                display: block !important; 
                width: 100% !important;
                border-right: 0 !important;
                border-left: 0 !important;
                border-bottom: 1px solid rgba(112, 125, 252, 0.1) !important;
                padding: 32px 24px !important;
            }
            .metric-cell-last { border-bottom: 0 !important; }
            .metric-value { font-size: 48px !important; white-space: nowrap !important; }
            .metric-label { font-size: 11px !important; }
            
            /* Buttons */
            .cta-button { padding: 18px 40px !important; font-size: 13px !important; max-width: 90% !important; }
            
            /* Footer */
            .footer-content { padding: 40px 24px !important; }
            .footer-divider { margin: 0 24px !important; }
        }
        
        /* Large phones */
        @media only screen and (max-width: 480px) {
            .mobile-pad { padding-left: 20px !important; padding-right: 20px !important; }
            
            /* Typography - Large phones */
            .hero-headline { font-size: 28px !important; line-height: 1.3 !important; }
            .body-text { font-size: 15px !important; }
            
            /* Metrics */
            .metric-value { font-size: 42px !important; }
            .metric-cell { padding: 28px 20px !important; }
            
            /* Buttons */
            .cta-button { padding: 16px 32px !important; font-size: 12px !important; max-width: 85% !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; width: 100%; background-color: #000000; -webkit-font-smoothing: antialiased;">
    
    <div style="display: none; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #000000;">
        Quick question regarding your social media engagement... &#847; &#847; &#847;
    </div>
    
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #000000;">
        <tr>
            <td align="center" valign="top" style="padding: 0;">
                
                <table role="presentation" class="container" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; width: 100%;">
                    
                    <tr>
                        <td align="center" style="padding: 0;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="height: 3px; background: linear-gradient(90deg, #a3aeff 0%, #707dfc 25%, #555dfc 50%, #4046e0 75%, #2f3396 100%);"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td align="center" class="mobile-pad" style="padding: 48px 40px 0 40px; background-color: #000000;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="center">
                                        <a href="https://newgenmarketing.netlify.app" target="_blank" style="text-decoration: none;">
                                            <img src="https://github.com/JavierGoodall99/assets/blob/2ed9a78759f86d2ed43c81993f806ff39195a894/newgenmarketinglogo.png?raw=true" alt="NewGen Marketing" width="600" class="logo-img" style="display: block; height: auto; max-width: 600px; width: 100%;">
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td align="left" class="mobile-pad" style="padding: 56px 40px 40px 40px; background-color: #000000;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="left">
                                        <p class="body-text" style="margin: 0 0 24px 0; font-family: 'Inter', Arial, sans-serif; font-weight: 400; font-size: 16px; line-height: 1.6; color: #ffffff;">
                                            Hi ${data.recipientName},
                                        </p>
                                        
                                        <p class="body-text" style="margin: 0 0 24px 0; font-family: 'Inter', Arial, sans-serif; font-weight: 400; font-size: 16px; line-height: 1.6; color: rgba(255, 255, 255, 0.8);">
                                            ${data.introText.replace(/\[\[senderName\]\]/g, data.senderName)}
                                        </p>

                                        <p class="body-text" style="margin: 0 0 24px 0; font-family: 'Inter', Arial, sans-serif; font-weight: 400; font-size: 16px; line-height: 1.6; color: rgba(255, 255, 255, 0.8);">
                                            ${data.valuePropText.replace(/\[\[senderName\]\]/g, data.senderName)}
                                        </p>

                                        <p class="body-text" style="margin: 0 0 32px 0; font-family: 'Inter', Arial, sans-serif; font-weight: 400; font-size: 16px; line-height: 1.6; color: rgba(255, 255, 255, 0.8);">
                                            ${data.proofText.replace(/\[\[senderName\]\]/g, data.senderName)}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td align="center" class="metric-wrapper" style="padding: 0 32px 48px 32px; background-color: #000000;">
                            <table role="presentation" class="metric-table" border="0" cellpadding="0" cellspacing="0" width="100%" style="background: linear-gradient(180deg, rgba(112, 125, 252, 0.04) 0%, rgba(85, 93, 252, 0.02) 100%); border: 1px solid rgba(112, 125, 252, 0.12); border-radius: 20px;">
                                <tr class="metric-row">
                                    ${data.metrics.map((metric, index) => {
        const isLast = index === data.metrics.length - 1;
        const width = Math.floor(100 / data.metrics.length);
        const cellClass = isLast ? 'metric-cell metric-cell-last' : 'metric-cell';
        const borderStyle = isLast ? '' : 'border-right: 1px solid rgba(112, 125, 252, 0.1);';

        return `
                                    <td class="${cellClass}" width="${width}%" align="center" valign="middle" style="padding: 32px 16px; ${borderStyle}">
                                        <span class="metric-value" style="font-family: 'Playfair Display', Georgia, serif; font-weight: 400; font-size: 42px; color: #ffffff; display: block; line-height: 1; white-space: nowrap;">${metric.value}<span style="color: ${metric.suffixColor};">${metric.suffix}</span></span>
                                        <span class="metric-label" style="font-family: 'Inter', Arial, sans-serif; font-weight: 500; font-size: 10px; color: rgba(255, 255, 255, 0.45); letter-spacing: 2px; text-transform: uppercase; display: block; margin-top: 10px;">${metric.label}</span>
                                    </td>`;
    }).join('')}
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td align="center" style="padding: 0 40px 60px 40px; background-color: #000000;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                
                                <tr>
                                    <td align="center" style="padding-bottom: 24px;">
                                        <p class="body-text" style="margin: 0; font-family: 'Inter', Arial, sans-serif; font-weight: 400; font-size: 16px; line-height: 1.6; color: rgba(255, 255, 255, 0.8);">
                                            I have a short case study document that shows exactly how we did it for them. Would you be open to me sending you the link to look over?
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td align="center">
                                        <a href="${data.ctaLink}" target="_blank" class="cta-button btn-primary" style="font-family: 'Inter', Arial, sans-serif; font-weight: 700; font-size: 14px; color: #000000; text-decoration: none; padding: 20px 40px; display: inline-block; background: linear-gradient(135deg, #a3aeff 0%, #707dfc 50%, #555dfc 100%); border-radius: 100px; letter-spacing: 1px; text-transform: uppercase; box-shadow: 0 8px 32px rgba(112, 125, 252, 0.4);">
                                            ${data.ctaText}
                                        </a>
                                        </td>
                                </tr>
                                
                                <tr>
                                    <td align="center" style="padding-top: 30px;">
                                        <p class="body-text" style="margin: 0; font-family: 'Inter', Arial, sans-serif; font-weight: 400; font-size: 16px; line-height: 1.6; color: rgba(255, 255, 255, 0.6);">
                                            Best,<br>${data.senderName}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td align="center" class="footer-divider" style="padding: 0 40px;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(112, 125, 252, 0.2) 50%, transparent 100%);"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td align="center" class="footer-content" style="padding: 56px 40px; background-color: #000000;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="center" style="padding-bottom: 32px; text-align: center;">
                                        <a href="https://www.instagram.com/newgenmarketing" target="_blank" style="display: inline-block; width: 44px; height: 44px; background: rgba(112, 125, 252, 0.08); border: 1px solid rgba(112, 125, 252, 0.15); border-radius: 50%; text-align: center; line-height: 44px; text-decoration: none; margin: 0 8px;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" width="18" height="18" style="display: inline-block; vertical-align: middle; filter: brightness(0) invert(1); opacity: 0.7;">
                                        </a>
                                        <a href="https://www.facebook.com/newgenmarketing" target="_blank" style="display: inline-block; width: 44px; height: 44px; background: rgba(112, 125, 252, 0.08); border: 1px solid rgba(112, 125, 252, 0.15); border-radius: 50%; text-align: center; line-height: 44px; text-decoration: none; margin: 0 8px;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" width="18" height="18" style="display: inline-block; vertical-align: middle; filter: brightness(0) invert(1); opacity: 0.7;">
                                        </a>
                                        <a href="https://wa.me/263771415610" target="_blank" style="display: inline-block; width: 44px; height: 44px; background: rgba(112, 125, 252, 0.08); border: 1px solid rgba(112, 125, 252, 0.15); border-radius: 50%; text-align: center; line-height: 44px; text-decoration: none; margin: 0 8px;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/4423/4423697.png" alt="WhatsApp" width="18" height="18" style="display: inline-block; vertical-align: middle; filter: brightness(0) invert(1); opacity: 0.7;">
                                        </a>
                                        <a href="https://newgenmarketing.netlify.app/" target="_blank" style="display: inline-block; width: 44px; height: 44px; background: rgba(112, 125, 252, 0.08); border: 1px solid rgba(112, 125, 252, 0.15); border-radius: 50%; text-align: center; line-height: 44px; text-decoration: none; margin: 0 8px;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" alt="Website" width="18" height="18" style="display: inline-block; vertical-align: middle; filter: brightness(0) invert(1); opacity: 0.7;">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-bottom: 20px;">
                                        <span class="footer-text" style="font-family: 'Inter', Arial, sans-serif; font-size: 12px; color: rgba(255, 255, 255, 0.35); line-height: 1.7;">
                                            Harare, Zimbabwe<br>
                                            sales@newgenmarketingzw.com
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-bottom: 16px;">
                                        <p style="font-family: 'Inter', Arial, sans-serif; font-size: 12px; color: rgba(255, 255, 255, 0.4); margin: 0; line-height: 1.6;">
                                            Unsubscribe instantly from these emails by <a href="[[unsubscribe]]" title="One click unsubscribe" style="color: #707dfc; text-decoration: underline;">clicking here</a>.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td align="center" style="padding: 0;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="height: 3px; background: linear-gradient(90deg, #2f3396 0%, #4046e0 25%, #555dfc 50%, #707dfc 75%, #a3aeff 100%);"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                </table>
                </td>
        </tr>
    </table>
    
</body>
</html>`;
};