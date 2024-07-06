import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_CENTRAL_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_CENTRAL_KEY
export const centralSupabase = createClient(supabaseUrl, supabaseKey)

const supabaseQuanterraUrl = import.meta.env.VITE_SUPABASE_QUANTERRA_URL
const supabaseQuanterraKey = import.meta.env.VITE_SUPABASE_QUANTERRA_KEY
export const quanterraSupabase = createClient(supabaseQuanterraUrl, supabaseQuanterraKey)