
const loader = document.querySelector('.page-loader');
window.addEventListener('load', () => {
  setTimeout(() => loader?.classList.add('hide'), 780);
});

const searchPanel = document.querySelector('.search-panel');
const searchToggle = document.querySelector('.search-toggle');
const searchClose = document.querySelector('.search-close');
const searchInput = document.querySelector('#siteSearch');
const searchResults = document.querySelector('.search-results');

const pages = [
  {title:"Research", meta:"Research articles, experiments and student projects", url:"research.html", terms:"research physics chemistry biology mathematics ai engineering"},
  {title:"The Curious Mind", meta:"Newton's Apple student STEM magazine", url:"magazine.html", terms:"magazine issue feature interview puzzle"},
  {title:"STEM Talks", meta:"Talks from students, teachers and guests", url:"talks.html", terms:"talk lecture speaker event"},
  {title:"Staff", meta:"Editorial, research and digital team", url:"staff.html", terms:"staff website manager editor team"},
  {title:"About Newton's Apple", meta:"Mission, values and community", url:"about.html", terms:"about mission innovation community"},
  {title:"Publish with us", meta:"Submit research, articles and talk proposals", url:"submit.html", terms:"submit publish article research talk"}
];

searchToggle?.addEventListener('click', () => {
  searchPanel.classList.add('open'); 
  setTimeout(()=>searchInput?.focus(),50);
});
searchClose?.addEventListener('click',()=>searchPanel.classList.remove('open'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')searchPanel.classList.remove('open')});
searchInput?.addEventListener('input', e=>{
  const q=e.target.value.trim().toLowerCase();
  if(!q){searchResults.innerHTML='<p class="meta">Search articles, sections and people.</p>';return}
  const hits=pages.filter(x=>(x.title+' '+x.meta+' '+x.terms).toLowerCase().includes(q));
  searchResults.innerHTML=hits.length?hits.map(x=>`<a class="search-hit" href="${x.url}"><strong>${x.title}</strong><small>${x.meta}</small></a>`).join(''):'<p class="meta">No results found.</p>';
});

document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const category=btn.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(card=>{
      card.style.display=(category==='all'||card.dataset.category.includes(category))?'block':'none';
    });
  });
});
