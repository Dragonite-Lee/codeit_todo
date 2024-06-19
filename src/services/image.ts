const username: string = "dragonite";
const base_url = new URL("https://assignment-todolist-api.vercel.app/api");

export const getImageUrl = async (formData: FormData): Promise<string> => {
  const response = await fetch(`${base_url}/${username}/images/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data.url;
};
