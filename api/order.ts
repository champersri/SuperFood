
export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { items, addons } = request.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return response.status(400).json({ error: 'Cart is empty' });
    }

    // Simulate backend processing delay (e.g., database write, payment processing)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate a mock Order ID
    const orderId = `ORD-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 1000)}`;

    return response.status(200).json({
      success: true,
      message: 'Order placed successfully',
      orderId,
    });
  } catch (error) {
    console.error('Order processing error:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
