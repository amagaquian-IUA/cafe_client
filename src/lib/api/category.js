import { supabase } from '../supabase'


export const getCategories = async () => {
    const { data: categories } = await supabase.from('categories').select()
    return categories
}