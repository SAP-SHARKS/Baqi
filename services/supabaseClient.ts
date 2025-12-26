import { createClient } from '@supabase/supabase-js';

// 1. Paste your Project URL here
const supabaseUrl = 'https://rmtvszxcrzmoxywljknq.supabase.co';

// 2. Paste your Anon Key here
const supabaseAnonKey = 'sb_publishable_IKJEQYHOJa8IMz8OKvzy8A_FhB0Dxu4J';

// This creates the connection engine
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
