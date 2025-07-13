// app/api/subscribe/route.ts

export async function POST(req: Request) {
    try {
      const { email } = await req.json();
  
      if (!email || !email.includes('@')) {
        return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
      }
  
      // Simulate DB or 3rd party email logic here
      console.log("Subscribed:", email);
  
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
    }
  }
  