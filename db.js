const { createClient } = "@supabase/supabase-js";
const { config } = "dotenv";

config();
const supabase = createClient(process.env.BD_URL,process.env.DB_PUBLIC_SECRET);

export default supabase;