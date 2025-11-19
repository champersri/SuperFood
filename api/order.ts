import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!  // backend safe key
  );

  const { items, addons } = req.body;

  const { data, error } = await supabase
    .from('orders')
    .insert([{ items, addons }]);

  if (error) {
    console.error(error);
    return res.status(500).json({ success: false, error });
  }

  return res.status(200).json({ success: true, data });
}

