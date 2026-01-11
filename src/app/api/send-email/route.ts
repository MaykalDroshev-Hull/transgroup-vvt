import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { translations, Language } from '@/lib/translations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, person, contact, cargo, message, lang } = body;

    // Validate required fields
    if (!company || !person || !contact || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get email credentials from environment variables
    const emailUser = process.env.NEXT_EMAIL;
    const emailPass = process.env.NEXT_EMAIL_PASS;

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { error: 'Email configuration missing' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Get translations for the selected language
    const t = translations[lang as Language] || translations.bg;
    const tBg = translations.bg;

    // Cargo type mapping
    const cargoTypeMap: Record<string, string> = {
      frigo: t.contact.form.cargoOptions.frigo,
      dry: t.contact.form.cargoOptions.dry,
      groupage: t.contact.form.cargoOptions.groupage,
      other: t.contact.form.cargoOptions.other,
    };

    const cargoType = cargoTypeMap[cargo] || cargo || t.contact.form.cargoOptions.select;

    // Email to self (in Bulgarian)
    const emailToSelf = {
      from: emailUser,
      to: 'transgroupvvt@gmail.com',
      subject: `Ново запитване от ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Ново запитване от уебсайта
          </h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>${tBg.contact.form.company}:</strong> ${company}</p>
            <p><strong>${tBg.contact.form.person}:</strong> ${person}</p>
            <p><strong>${tBg.contact.form.contact}:</strong> ${contact}</p>
            <p><strong>${tBg.contact.form.cargo}:</strong> ${cargoType}</p>
            <p><strong>${tBg.contact.form.message}:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message}
            </p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            Това съобщение е изпратено автоматично от контактната форма на уебсайта.
          </p>
        </div>
      `,
    };

    // Email to enquirer (in selected language)
    const emailToEnquirer = {
      from: emailUser,
      to: contact.includes('@') ? contact : undefined, // Only send if it's an email
      subject: lang === 'bg' 
        ? 'Благодарим за вашето запитване - TransGroup VVT'
        : lang === 'en-GB'
        ? 'Thank you for your inquiry - TransGroup VVT'
        : lang === 'pl'
        ? 'Dziękujemy za zapytanie - TransGroup VVT'
        : lang === 'el'
        ? 'Ευχαριστούμε για το αίτημά σας - TransGroup VVT'
        : 'Thank you for your inquiry - TransGroup VVT',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            ${lang === 'bg' 
              ? 'Благодарим за вашето запитване'
              : lang === 'en-GB'
              ? 'Thank you for your inquiry'
              : lang === 'pl'
              ? 'Dziękujemy za zapytanie'
              : lang === 'el'
              ? 'Ευχαριστούμε για το αίτημά σας'
              : 'Thank you for your inquiry'}
          </h2>
          <p style="font-size: 16px; line-height: 1.6;">
            ${lang === 'bg'
              ? `Уважаеми/а ${person},`
              : lang === 'en-GB'
              ? `Dear ${person},`
              : lang === 'pl'
              ? `Szanowny/a ${person},`
              : lang === 'el'
              ? `Αγαπητέ/ή ${person},`
              : `Dear ${person},`}
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            ${lang === 'bg'
              ? 'Благодарим ви за вашето запитване. Нашият екип ще се свърже с вас възможно най-скоро.'
              : lang === 'en-GB'
              ? 'Thank you for your inquiry. Our team will contact you as soon as possible.'
              : lang === 'pl'
              ? 'Dziękujemy za zapytanie. Nasz zespół skontaktuje się z Państwem jak najszybciej.'
              : lang === 'el'
              ? 'Ευχαριστούμε για το αίτημά σας. Η ομάδα μας θα επικοινωνήσει μαζί σας το συντομότερο δυνατό.'
              : 'Thank you for your inquiry. Our team will contact you as soon as possible.'}
          </p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>${t.contact.form.company}:</strong> ${company}</p>
            <p style="margin: 5px 0 0 0;"><strong>${t.contact.form.cargo}:</strong> ${cargoType}</p>
          </div>
          <p style="font-size: 16px; line-height: 1.6;">
            ${lang === 'bg'
              ? 'С уважение,<br>Екипът на TransGroup VVT'
              : lang === 'en-GB'
              ? 'Best regards,<br>TransGroup VVT Team'
              : lang === 'pl'
              ? 'Z poważaniem,<br>Zespół TransGroup VVT'
              : lang === 'el'
              ? 'Με εκτίμηση,<br>Η ομάδα TransGroup VVT'
              : 'Best regards,<br>TransGroup VVT Team'}
          </p>
          <div style="border-top: 1px solid #e5e7eb; margin-top: 30px; padding-top: 20px; color: #6b7280; font-size: 12px;">
            <p><strong>${t.contact.email}:</strong> transgroupvvt@gmail.com</p>
            <p><strong>${t.contact.phone}:</strong> +359 876 535 379</p>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(emailToSelf);
    
    // Only send to enquirer if contact is an email address
    if (contact.includes('@')) {
      await transporter.sendMail(emailToEnquirer);
    }

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
