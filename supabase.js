import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://pmpzilqpcomoodaksbhw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_tjYI1IKegMFywNCqGPdKng_fSGIe7Zx';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
