
import { createClient } from "@supabase/supabase-js";

const saleemUrl = import.meta.env.SALEEM_URL
const shabanaKey = import.meta.env.SHABANA_KEY



export const supabase = createClient(saleemUrl, shabanaKey)