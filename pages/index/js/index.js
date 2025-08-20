if(host.split(":")[0]!="127.0.0.1"){
    webUrl+="YT-ChartX/"
}

// 图片数据
var images = [];        
// 常量
const IMAGES_PER_PAGE = 12; // 每页18张图片（3行，每行6张）        
// DOM 元素
const gallery = document.getElementById('imageGallery');
const pagination = document.getElementById('pagination');
const paginationInfo = document.getElementById('paginationInfo');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.getElementById('closeModal');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const addImageBtn = document.getElementById('addImageBtn');  
// 状态变量
let currentPage = 1;
let filteredImages = [];
let currentImageIndex = 0;
let totalPages = 1;


        // 初始化画廊
        function initGallery() {
            filteredImages = [...images];
            calculateTotalPages();
            renderGallery();
            renderPagination();
            
            // 事件监听
            searchInput.addEventListener('input', handleSearch);
            closeModal.addEventListener('click', closeImageModal);
            addImageBtn.addEventListener('click', openAddImageModal);
            
            // 点击模态框背景关闭
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeImageModal();
                }
            });
        }
        
        // 计算总页数
        function calculateTotalPages() {
            totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);
            paginationInfo.textContent = `第${currentPage}页 / 共${totalPages}页`;
        }
        
        // 渲染画廊
        function renderGallery() {
            gallery.innerHTML = '';
            
            if (filteredImages.length === 0) {
                gallery.innerHTML = '<div class="no-results">未找到匹配的图片</div>';
                return;
            }
            
            // 计算当前页的图片
            const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
            const endIndex = Math.min(startIndex + IMAGES_PER_PAGE, filteredImages.length);
            const currentPageImages = filteredImages.slice(startIndex, endIndex);
            
            currentPageImages.forEach((img, index) => {
                const imageCard = document.createElement('div');
                imageCard.className = 'image-card';
                imageCard.innerHTML = `
                    <img src="imgs/${img.id}.png" alt="${img.name}">
                    <div class="image-title">${img.name}</div>
                    <button class="delete-btn" data-id="${img.id}">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                imageCard.addEventListener('click', (e) => {
                    alert(1)
                    if (!e.target.closest('.delete-btn')) {
                        openModal(img, startIndex + index);
                    }
                });

                const deleteBtn = imageCard.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', () => deleteImage(img.id));

                gallery.appendChild(imageCard);
            });
        }
        
        // 渲染分页控件
        function renderPagination() {
            pagination.innerHTML = '';            
            // 添加上一页按钮
            const prevBtn = document.createElement('button');
            prevBtn.className = 'page-btn';
            prevBtn.innerHTML = '&laquo;';
            prevBtn.disabled = currentPage === 1;
            prevBtn.addEventListener('click', () => changePage(currentPage - 1));
            pagination.appendChild(prevBtn);            
            // 添加页码按钮
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, startPage + 4);            
            for (let i = startPage; i <= endPage; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
                pageBtn.textContent = i;
                pageBtn.addEventListener('click', () => changePage(i));
                pagination.appendChild(pageBtn);
            }            
            // 添加下一页按钮
            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-btn';
            nextBtn.innerHTML = '&raquo;';
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.addEventListener('click', () => changePage(currentPage + 1));
            pagination.appendChild(nextBtn);
        }
        
        // 处理搜索
        function handleSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            filteredImages = images.filter(img => 
                img.name.toLowerCase().includes(searchTerm) //|| 
                // img.category.toLowerCase().includes(searchTerm)
            );            
            currentPage = 1;
            calculateTotalPages();
            renderGallery();
            renderPagination();
        }
        
        // 切换页面
        function changePage(page) {
            if (page < 1 || page > totalPages || page === currentPage) return;            
            currentPage = page;
            calculateTotalPages();
            renderGallery();
            renderPagination();            
            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }