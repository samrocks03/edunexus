'use server';
import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";

export const createCompanion = async (formData: CreateCompanion) => {
    const {userId: author} = await auth()
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .insert({...formData, author})
        .select();

    if(error || !data)
        throw new Error(error?.message || "Failed to create Companion");

    return data[0];
}

export const fetchCompanions = async ({limit = 10, page=1, subject, topic}: GetAllCompanions) => {
    // const {data } = await auth()
    const supabase = createSupabaseClient();

    let query = supabase.from('companions').select();
    if(subject && topic){
        query = query.ilike('subject', `%${subject}%`)
            .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    } else if(subject){
        query = query.ilike('subject', `%${subject}%`)
    }else if (topic){
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    }

    query = query.range((page - 1) * limit, page * limit  - 1)

    const {data: companionsData, error} = await query

    if(error || !companionsData)
            throw new Error(error?.message || "Failed to retrieve Companions");

    return companionsData
}