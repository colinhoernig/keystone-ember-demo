
var Post = DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  state: DS.attr('string'),
  author: DS.attr('string'),
  publishedDate: DS.attr('date'),
  image: DS.attr('string'),
  content: DS.attr('string'),
  categories: DS.attr('string')
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Post title',
      slug: 'post slug',
      state: 'published',
      author: 'Talon Poole',
      publishedDate: 345234234,
      image: 'files/pic.png',
      content: 'post content blah vlah blah',
      categories: ['post', 'lol']
    }
  ]
});

export default Post;
