export default function decorate(block) {
  // Wrap all non-picture children in a content div
  const content = document.createElement('div');
  content.className = 'hero-content';

  [...block.children].forEach((child) => {
    if (!child.querySelector('picture')) {
      content.append(child);
    }
  });

  if (content.children.length) {
    block.append(content);
  }
}
