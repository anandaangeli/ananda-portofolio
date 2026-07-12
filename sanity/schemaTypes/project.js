const project = {
  name: 'project',
  title: 'Proyek',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Proyek',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'image',
      title: 'Gambar Tangkapan Layar',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'tech',
      title: 'Teknologi yang Digunakan',
      type: 'string',
      description: 'Contoh: Next.js, Python, React, NLP, dll.',
    },
    {
      name: 'description',
      title: 'Deskripsi Proyek',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Tautan (Demo / GitHub)',
      type: 'url',
    },
  ],
}

export default project