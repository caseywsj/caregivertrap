import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phase, story } = await request.json();

    if (!story || !phase) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.STORY_NOTIFICATION_EMAIL!,
      subject: `New story submission — ${phase}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 2rem; color: #2C2C2A;">
          <h2 style="font-weight: normal; color: #BA7517; margin-bottom: 0.5rem;">New Community Story</h2>
          <p style="font-size: 12px; color: #888780; margin-bottom: 2rem;">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
            <tr>
              <td style="padding: 8px 0; color: #888780; font-size: 13px; width: 80px;">Phase</td>
              <td style="padding: 8px 0; font-size: 13px;">${phase}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888780; font-size: 13px;">Name</td>
              <td style="padding: 8px 0; font-size: 13px;">${name || 'Anonymous'}</td>
            </tr>
          </table>

          <div style="background: #F5F0E8; border-left: 3px solid #BA7517; padding: 1.5rem; border-radius: 0 8px 8px 0;">
            <p style="font-size: 15px; line-height: 1.8; margin: 0; font-style: italic;">${story.replace(/\n/g, '<br/>')}</p>
          </div>

          <p style="font-size: 12px; color: #888780; margin-top: 2rem;">
            Submitted via caregivertrap.com/community
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Story submission error:', error);
    return NextResponse.json({ error: 'Failed to submit story' }, { status: 500 });
  }
}
