import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Wire to Resend.com or similar service
    // For now, just log to console and return success
    console.log('Contact form submission:', { name, email, message, timestamp: new Date() });

    // Placeholder response - replace with actual email service
    return NextResponse.json({
      success: true,
      message: 'Your message has been received. We will contact you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
