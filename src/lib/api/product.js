import { supabase } from '../supabase'

export const getProducts = async () => {
    const { data: products } = await supabase.from('products').select(`
        *,
        categories!inner (*)    
    `)
    return products
}

export const getProdByCat = async (cat) => {
    const { data: products } = await supabase.from('products').select(`
        *,
        categories!inner (*)    
    `)
        .eq('id_category', cat) // equivalente al WHERE id_category = xxxx
    return products
}