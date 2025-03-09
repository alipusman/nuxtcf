export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { slug } = query; // Ambil parameter slug dari query URL

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Parameter slug diperlukan' });
  }

  try {
    // Fetch data dari API eksternal
    const datav = await $fetch(`https://api-aresa.alipusman.workers.dev/data?key=${slug}`);
    return datav.data;
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Gagal mengambil data' });
  }
});
