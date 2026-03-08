import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "innubkpyyjfbitatulns"
const supabaseKey = "sb_publishable_RodDSAtXwFOH_o-a-sy4lg_NEmqk8Ec"

export const supabase = createClient(supabaseUrl, supabaseKey)