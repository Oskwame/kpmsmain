"use server"
import { createClient } from '@supabase/supabase-js';
    
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const fetchProjects = async () => {

    const { data, error } = await supabase
    .from("projects")
    .select("project_title", "project_year", "project_supervisor", "programme_type", "view_project")
}

