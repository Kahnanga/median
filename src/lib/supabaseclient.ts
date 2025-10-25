import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  console.error('❌ Missing NEXT_PUBLIC_SUPABASE_URL. Current value:', supabaseUrl)
  throw new Error('Supabase URL not found. Did you set it in Builder.io environment variables?')
}

if (!supabaseAnonKey) {
  console.error('❌ Missing NEXT_PUBLIC_SUPABASE_ANON_KEY. Current value:', supabaseAnonKey)
  throw new Error('Supabase Anon Key not found. Did you set it in Builder.io environment variables?')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
