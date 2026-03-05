// إعدادات لوحة التحكم لرفع الصور وتصنيفها
export default {
  name: 'default',
  title: 'NYK Admin Center',
  projectId: 'your_project_id', // سأعلمك كيف تحصل عليه لاحقاً
  dataset: 'production',
  schema: {
    types: [
      {
        name: 'project',
        title: 'Nos Projets',
        type: 'document',
        fields: [
          { name: 'title', title: 'Nom du Projet', type: 'string' },
          { name: 'category', title: 'Catégorie', type: 'string', options: { list: ['Cuisine', 'Salle de Bain', 'Sol', 'Façade'] } },
          { name: 'mainImage', title: 'Image', type: 'image' },
          { name: 'description', title: 'Description (Fr)', type: 'text' }
        ]
      }
    ]
  }
}

