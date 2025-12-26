import { createClient } from '@supabase/supabase-js';

// 1. Paste your Project URL here
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

// 2. Paste your Anon Key here
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// This creates the connection engine
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
