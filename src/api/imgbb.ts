interface ImageBBResponse {
  success: boolean;
  data: {
    display_url: string;
    url: string;
    delete_url: string;
  };
}

export async function uploadImageToImgBB(file: File): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY || process.env.NEXT_PUBLIC_IMG_UPLOAD_API;
  if (!apiKey) {
    throw new Error("NEXT_PUBLIC_IMGBB_API_KEY is not defined. Please set it in your .env file and restart the dev server.");
  }

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`ImageBB upload failed: ${res.status} ${res.statusText} - ${body}`);
  }

  const json: ImageBBResponse = await res.json();
  if (!json.success) throw new Error("ImageBB returned failure");

  return json.data.display_url;
}