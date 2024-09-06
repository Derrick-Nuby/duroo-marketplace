import { createClient } from '@supabase/supabase-js';

const bucket = 'duroo-bucket';

export const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string
);


export const uploadImage = async ({ image }: { image: File; }) => {
    const timestamp = Date.now();
    const newName = `/prodImgs/${timestamp}-${image.name}`;

    const { data, error } = await supabase.storage
        .from(bucket)
        .upload(newName, image, {
            cacheControl: "3600",
        });
    if (!data) throw new Error("Image upload failed");
    return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};