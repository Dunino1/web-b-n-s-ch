const books = [
	{ id: "nha-gia-kim", title: "Nhà Giả Kim", author: "Paulo Coelho", category: "Văn học", price: 79000, oldPrice: 108000, rating: 4.9, reviews: 328, tag: "Bán chạy", isbn: "9786043443889", pages: 228, publisher: "NXB Hội Nhà Văn", year: 2024, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=85", description: "Một cuốn sách nhỏ chứa đựng câu chuyện lớn về hành trình theo đuổi ước mơ. Santiago lên đường tìm kho báu và nhận ra điều quý giá nhất đôi khi ở ngay nơi ta bắt đầu." },
	{ id: "dung-lua-chon-an-nhan-khi-con-tre", title: "Đừng Lựa Chọn An Nhàn Khi Còn Trẻ", author: "Cảnh Thiên", category: "Kỹ năng sống", price: 89000, oldPrice: 125000, rating: 4.8, reviews: 216, tag: "Được yêu thích", isbn: "9786047751678", pages: 336, publisher: "NXB Thế Giới", year: 2025, image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=85", description: "Những câu chuyện gần gũi về lựa chọn, kiên trì và tuổi trẻ. Cuốn sách là lời nhắc nhẹ nhàng để bạn chủ động viết nên hành trình của riêng mình." },
	{ id: "tu-duy-nhanh-va-cham", title: "Tư Duy Nhanh Và Chậm", author: "Daniel Kahneman", category: "Kinh tế", price: 189000, oldPrice: 249000, rating: 4.9, reviews: 173, tag: "Bán chạy", isbn: "9786041196231", pages: 612, publisher: "NXB Thế Giới", year: 2024, image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=85", description: "Nobel Kinh tế Daniel Kahneman dẫn lối vào hai hệ thống tư duy đang âm thầm định hình cách ta phán đoán, lựa chọn và nhìn thế giới." },
	{ id: "dac-nhan-tam", title: "Đắc Nhân Tâm", author: "Dale Carnegie", category: "Kỹ năng sống", price: 76000, oldPrice: 98000, rating: 4.8, reviews: 502, tag: "Kinh điển", isbn: "9786041199645", pages: 320, publisher: "NXB Tổng Hợp TP.HCM", year: 2023, image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=85", description: "Những nguyên tắc ứng xử vượt thời gian giúp bạn hiểu người, lắng nghe chân thành và xây dựng những mối quan hệ tốt đẹp hơn." },
	{ id: "mat-biec", title: "Mắt Biếc", author: "Nguyễn Nhật Ánh", category: "Văn học", price: 110000, oldPrice: 135000, rating: 4.9, reviews: 417, tag: "Tác phẩm Việt", isbn: "9786041191014", pages: 300, publisher: "NXB Trẻ", year: 2024, image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&w=800&q=85", description: "Một chuyện tình đơn phương trong veo và day dứt, đi qua những miền ký ức tuổi thơ của làng Đo Đo qua giọng kể riêng của Nguyễn Nhật Ánh." },
	{ id: "tuoi-tre-dang-gia-bao-nhieu", title: "Tuổi Trẻ Đáng Giá Bao Nhiêu", author: "Rosie Nguyễn", category: "Kỹ năng sống", price: 82000, oldPrice: 105000, rating: 4.7, reviews: 284, tag: "Bán chạy", isbn: "9786041126696", pages: 292, publisher: "NXB Hội Nhà Văn", year: 2025, image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=85", description: "Đọc, học, trải nghiệm và khám phá chính mình qua những gợi ý thực tế dành cho những năm tháng đáng nhớ nhất của tuổi trẻ." },
	{ id: "khoi-nghiep-tinh-gon", title: "Khởi Nghiệp Tinh Gọn", author: "Eric Ries", category: "Kinh tế", price: 149000, oldPrice: 189000, rating: 4.7, reviews: 119, tag: "Lựa chọn biên tập", isbn: "9786049310150", pages: 404, publisher: "NXB Công Thương", year: 2025, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=85", description: "Phương pháp thử nghiệm nhanh, lắng nghe khách hàng và học hỏi liên tục giúp doanh nghiệp tìm ra hướng đi hiệu quả." },
	{ id: "dac-nhan-tam-tre-em", title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ", author: "Nguyễn Nhật Ánh", category: "Văn học", price: 88000, oldPrice: 109000, rating: 4.9, reviews: 384, tag: "Tác phẩm Việt", isbn: "9786041192646", pages: 208, publisher: "NXB Trẻ", year: 2023, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=85", description: "Mời bạn lên chuyến tàu trở về với những trò nghịch ngợm, suy nghĩ ngộ nghĩnh và tình bạn hồn nhiên của tuổi thơ." },
	{ id: "clean-code", title: "Clean Code - Mã Sạch", author: "Robert C. Martin", category: "Công nghệ", price: 239000, oldPrice: 299000, rating: 4.8, reviews: 96, tag: "Ấn bản mới", isbn: "9786043923867", pages: 464, publisher: "NXB Bách Khoa Hà Nội", year: 2025, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=85", description: "Những nguyên tắc và thực hành giúp lập trình viên viết mã dễ đọc, dễ bảo trì và có trách nhiệm hơn trong từng dòng code." },
	{ id: "hoang-tu-be", title: "Hoàng Tử Bé", author: "Antoine de Saint-Exupéry", category: "Thiếu nhi", price: 59000, oldPrice: 75000, rating: 5.0, reviews: 629, tag: "Kinh điển", isbn: "9786041126481", pages: 112, publisher: "NXB Kim Đồng", year: 2024, image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=85", description: "Cuộc gặp gỡ dịu dàng giữa một phi công và cậu bé đến từ tiểu tinh cầu xa xôi. Một câu chuyện dành cho mọi lứa tuổi về tình yêu và điều cốt yếu." },
	{ id: "atomic-habits", title: "Thói Quen Nguyên Tử", author: "James Clear", category: "Kỹ năng sống", price: 139000, oldPrice: 179000, rating: 4.9, reviews: 241, tag: "Bán chạy", isbn: "9786043924024", pages: 388, publisher: "NXB Thế Giới", year: 2024, image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=85", description: "Từng thay đổi nhỏ được tích lũy đúng cách có thể tạo nên kết quả đáng kể. James Clear chia sẻ cách hình thành thói quen tốt bền vững." },
	{ id: "tuoi-tho-du-doi", title: "Tuổi Thơ Dữ Dội", author: "Phùng Quán", category: "Thiếu nhi", price: 145000, oldPrice: 180000, rating: 4.9, reviews: 193, tag: "Tác phẩm Việt", isbn: "9786042262815", pages: 816, publisher: "NXB Kim Đồng", year: 2023, image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=85", description: "Tác phẩm giàu cảm xúc về những thiếu niên gan dạ trong cuộc kháng chiến, tái hiện tuổi thơ vừa dữ dội vừa trong sáng." }
];

const categories = [
	{ name: "Văn học", image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&w=500&q=80" },
	{ name: "Kinh tế", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=500&q=80" },
	{ name: "Công nghệ", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80" },
	{ name: "Kỹ năng sống", image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80" },
	{ name: "Thiếu nhi", image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=500&q=80" },
	{ name: "Giáo dục", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80" }
];

const projects = [
	{ title: "Xây dựng thư viện sách cộng đồng", date: "15.08.2026 · Quảng Nam", text: "Cùng nhau tạo nên không gian đọc thân thiện, miễn phí cho mọi người dân và các bạn nhỏ tại những khu vực còn thiếu sách.", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85" },
	{ title: "Sách cho trẻ em", date: "01.06.2026 · Hà Giang", text: "Gửi những tủ sách đầu tiên đến trường vùng cao, để mỗi em nhỏ đều có một người bạn đồng hành qua từng trang sách.", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85" },
	{ title: "Tủ sách trường học", date: "22.04.2026 · Đồng Tháp", text: "Cùng thầy cô và phụ huynh xây dựng góc đọc mở, nuôi dưỡng thói quen tự học và niềm yêu thích khám phá.", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85" },
	{ title: "Ngày hội đọc sách", date: "21.04.2026 · Hà Nội", text: "Một ngày để gặp gỡ tác giả, đổi sách cũ lấy sách mới và cùng chia sẻ những câu chuyện yêu thích.", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=85" },
	{ title: "Chương trình trao đổi sách", date: "Hằng tháng · Toàn quốc", text: "Trao một cuốn sách bạn đã đọc, nhận về một hành trình mới. Mỗi cuốn sách được đọc thêm một lần là thêm một điều tử tế.", image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&w=1000&q=85" }
];

const galleryImages = [
	["Góc đọc yên bình", "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1100&q=85"],
	["Những cuốn sách yêu thích", "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=850&q=85"],
	["Ngày hội đọc sách", "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=850&q=85"],
	["Không gian nhà sách", "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=850&q=85"],
	["Cùng nhau đọc", "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=850&q=85"],
	["Chia sẻ tri thức", "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=850&q=85"],
	["Tủ sách cộng đồng", "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=850&q=85"],
	["Một góc làm việc", "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=850&q=85"],
	["Tìm thấy cuốn sách hay", "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=850&q=85"]
];

const money = value => new Intl.NumberFormat("vi-VN").format(value) + "₫";
const getStored = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
let cart = getStored("bookhub-cart", []);
let wishlist = getStored("bookhub-wishlist", []);
let currentDetailQty = 1;
let activeGalleryIndex = 0;
const app = document.querySelector("#app");

function persist() {
	localStorage.setItem("bookhub-cart", JSON.stringify(cart));
	localStorage.setItem("bookhub-wishlist", JSON.stringify(wishlist));
	updateCartCount();
}

function updateCartCount() {
	const count = cart.reduce((total, item) => total + item.qty, 0);
	document.querySelectorAll(".cart-count").forEach(node => { node.textContent = count; });
}

function showToast(message) {
	const toast = document.createElement("div");
	toast.className = "toast";
	toast.textContent = message;
	document.querySelector(".toast-region").append(toast);
	setTimeout(() => toast.remove(), 2700);
}

function addToCart(id, qty = 1) {
	const item = cart.find(entry => entry.id === id);
	if (item) item.qty += qty;
	else cart.push({ id, qty });
	persist();
	showToast("Đã thêm sách vào giỏ hàng.");
}

function toggleWishlist(id) {
	const exists = wishlist.includes(id);
	wishlist = exists ? wishlist.filter(entry => entry !== id) : [...wishlist, id];
	persist();
	if (!location.hash.startsWith("#product/")) render();
	else document.querySelectorAll(`[data-favorite="${id}"]`).forEach(button => button.classList.toggle("is-favorite", !exists));
	showToast(exists ? "Đã xóa khỏi danh sách yêu thích." : "Đã lưu vào danh sách yêu thích.");
}

function productCard(book) {
	return `<article class="product-card"><a class="product-image" href="#product/${book.id}" aria-label="Xem ${book.title}"><img src="${book.image}" alt="Bìa sách ${book.title}" loading="lazy" /><span class="product-badge">${book.tag}</span></a><button class="favorite-button ${wishlist.includes(book.id) ? "is-favorite" : ""}" data-favorite="${book.id}" aria-label="${wishlist.includes(book.id) ? "Bỏ yêu thích" : "Thêm vào yêu thích"}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5.2-8.8 10.2-8.8 10.2S3.2 13.9 3.2 8.7a4.5 4.5 0 0 1 8.8-1.4 4.5 4.5 0 0 1 8.8 1.4Z"/></svg></button><div class="product-info"><span class="product-category">${book.category}</span><a class="product-title" href="#product/${book.id}">${book.title}</a><p class="product-author">${book.author}</p><div class="rating"><span>★★★★★</span><span>${book.rating} · ${book.reviews} đánh giá</span></div><div class="product-bottom"><span class="price">${money(book.price)}<del class="old-price">${money(book.oldPrice)}</del></span><button class="add-button" data-add="${book.id}">+ Thêm vào giỏ</button></div></div></article>`;
}

function productGrid(list) {
	return list.length ? list.map(productCard).join("") : `<p class="empty-state">Chưa tìm thấy cuốn sách phù hợp. Thử thay đổi bộ lọc nhé.</p>`;
}

function sectionHead(kicker, title, text, link = "") {
	return `<div class="section-head"><div><span class="eyebrow">${kicker}</span><h2 class="section-title">${title}</h2>${text ? `<p>${text}</p>` : ""}</div>${link ? `<a class="text-link" href="${link}">Xem tất cả <span>→</span></a>` : ""}</div>`;
}

function newsletter() {
	return `<section class="section-tight"><div class="container"><div class="newsletter"><div><span class="eyebrow">Thư từ BOOKHUB</span><h2>Đăng ký nhận tin từ BOOKHUB</h2><p>Nhận gợi ý sách hay, chuyện đọc thú vị và ưu đãi riêng mỗi tháng.</p></div><form class="newsletter-form" data-newsletter><label class="sr-only" for="newsletter-email">Địa chỉ email</label><input id="newsletter-email" name="email" type="email" placeholder="Địa chỉ email của bạn" required /><button class="button button-dark" type="submit">Đăng ký <span>→</span></button></form></div></div></section>`;
}

function homePage() {
	const bestsellers = books.filter(book => ["nha-gia-kim", "tu-duy-nhanh-va-cham", "dac-nhan-tam", "atomic-habits"].includes(book.id));
	const newest = books.filter(book => ["clean-code", "dung-lua-chon-an-nhan-khi-con-tre", "khoi-nghiep-tinh-gon", "mat-biec"].includes(book.id));
	return `<section class="hero"><div class="hero-inner"><div class="hero-copy"><span class="eyebrow">Một cuốn sách, một chân trời</span><h1 class="display-title">Khám phá thế giới qua từng <em>trang sách.</em></h1><p>Hàng nghìn đầu sách hay đang chờ bạn khám phá. Chọn một cuốn hôm nay, mở ra một thế giới mới ngày mai.</p><div class="hero-buttons"><a class="button button-primary" href="#products">Khám phá sách <span>↗</span></a><a class="button button-outline" href="#products?sort=popular">Xem sách bán chạy</a></div><div class="hero-note"><div class="avatar-stack"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="" /><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="" /><img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&q=80" alt="" /></div><span>Được yêu thích bởi <strong>50.000+</strong> độc giả</span></div></div><div class="hero-art"><div class="hero-photo"><img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1250&q=90" alt="Ánh nắng bên những kệ sách trong thư viện" fetchpriority="high" /></div><div class="hero-float"><img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=360&q=85" alt="Một cuốn sách được mở trang" /><p>Cuốn sách, người bạn đồng hành.</p><span>Chọn một điều hay cho hôm nay</span></div><div class="hero-stamp"><strong>50%</strong><span>ưu đãi đầu sách</span></div></div></div></section><div class="trust-strip container"><div class="trust-item"><span class="trust-mark">✳</span><b>100% sách chính hãng</b></div><div class="trust-item"><span class="trust-mark">↗</span><b>Giao hàng toàn quốc</b></div><div class="trust-item"><span class="trust-mark">♡</span><b>Đổi trả trong 7 ngày</b></div><div class="trust-item"><span class="trust-mark">✉</span><b>Gói quà theo yêu cầu</b></div></div><section class="section"><div class="container">${sectionHead("Tìm điều bạn yêu", "Chọn một lối đọc", "Từ một câu chuyện hay đến những ý tưởng làm thay đổi cách bạn nhìn thế giới.", "#products")}<div class="category-grid">${categories.map(category => `<a class="category-card" href="#products?category=${encodeURIComponent(category.name)}"><img src="${category.image}" alt="" loading="lazy" /><strong>${category.name} <span>↗</span></strong></a>`).join("")}</div></div></section><section class="section-tight"><div class="container">${sectionHead("Được độc giả chọn", "Sách bán chạy", "Những cuốn sách đang được chuyền tay và nhắc đến nhiều nhất.", "#products")}<div class="product-grid">${productGrid(bestsellers)}</div></div></section><section class="section"><div class="promo-band"><div class="promo-copy"><span class="eyebrow">Mùa đọc thật vui</span><h2>Ưu đãi đặc biệt – Giảm đến 50%</h2><p>Một món quà nhỏ cho chiếc kệ sách đang chờ được lấp đầy.</p><a class="button button-dark" href="#products">Xem ngay <span>↗</span></a></div><div class="promo-image"><img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=85" alt="Những cuốn sách được xếp chồng trong nắng" loading="lazy" /></div></div></section><section class="section-tight"><div class="container">${sectionHead("Vừa lên kệ", "Sách mới, ý tưởng mới", "Những tựa sách mới nhất vừa được BOOKHUB chọn cho bạn.", "#products")}<div class="product-grid">${productGrid(newest)}</div></div></section><section class="section"><div class="container">${sectionHead("Đọc giả kể", "Những trang sách để lại dư âm", "Chúng tôi tin rằng một cuốn sách hay sẽ còn tiếp tục sống trong những cuộc trò chuyện.", "")}<div class="testimonial-grid"><article class="testimonial"><div class="testimonial-stars">★★★★★</div><blockquote>“Đóng gói chỉn chu, sách đẹp hơn mình mong đợi. Từ ngày tìm được BOOKHUB, danh sách muốn đọc cứ dài thêm mãi.”</blockquote><div class="testimonial-person"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="" loading="lazy" /><div><strong>Minh Anh</strong><span>Độc giả tại Hà Nội</span></div></div></article><article class="testimonial"><div class="testimonial-stars">★★★★★</div><blockquote>“Có cả những đầu sách khó tìm. Mình thích cách gợi ý sách rất tinh tế và giao hàng nhanh hơn dự kiến.”</blockquote><div class="testimonial-person"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="" loading="lazy" /><div><strong>Hoàng Nam</strong><span>Độc giả tại Đà Nẵng</span></div></div></article><article class="testimonial"><div class="testimonial-stars">★★★★★</div><blockquote>“Lần đầu mua sách cho con mà còn có thiệp nhỏ xinh. Cảm giác như nhận quà từ một người bạn vậy.”</blockquote><div class="testimonial-person"><img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80" alt="" loading="lazy" /><div><strong>Thu Hà</strong><span>Độc giả tại TP. Hồ Chí Minh</span></div></div></article></div></div></section>${newsletter()}`;
}

function banner(title, description, crumb = "") {
	return `<section class="page-banner"><div class="container"><div class="breadcrumbs"><a href="#home">Trang chủ</a><span>/</span><span>${crumb || title}</span></div><span class="eyebrow">BOOKHUB · nhà sách trực tuyến</span><h1>${title}</h1><p>${description}</p></div></section>`;
}

function productsPage() {
	return `${banner("Tất cả sách", "Tìm cuốn sách tiếp theo sẽ khiến bạn muốn kể cho mọi người nghe.")}<div class="container shop-layout"><aside class="filters"><div class="filter-group"><h3>Thể loại</h3>${categories.map(category => `<label class="filter-option"><input type="checkbox" name="category" value="${category.name}" /> ${category.name}</label>`).join("")}</div><div class="filter-group"><h3>Đánh giá</h3>${[5,4,3].map(rating => `<label class="filter-option"><input type="radio" name="rating" value="${rating}" /> ${"★".repeat(rating)} trở lên</label>`).join("")}<label class="filter-option"><input type="radio" name="rating" value="0" checked /> Tất cả</label></div><div class="filter-group"><h3>Khoảng giá</h3><div class="filter-row"><input name="minPrice" type="number" min="0" placeholder="Từ (₫)" /><input name="maxPrice" type="number" min="0" placeholder="Đến (₫)" /></div></div><div class="filter-group"><h3>Tác giả</h3><select class="shop-search" name="author"><option value="">Tất cả tác giả</option>${[...new Set(books.map(book => book.author))].map(author => `<option>${author}</option>`).join("")}</select></div><button class="text-link" data-clear-filters>Xóa bộ lọc <span>↻</span></button></aside><div class="shop-results"><div class="shop-search-row"><label class="sr-only" for="shop-query">Tìm sách</label><input class="shop-search" id="shop-query" type="search" placeholder="Tìm tên sách, tác giả..." /><button class="button button-dark" data-shop-search>Tìm sách</button></div><div class="shop-results-head"><p class="result-count">Đang hiển thị ${books.length} cuốn sách</p><select name="sort" aria-label="Sắp xếp sách"><option value="popular">Phổ biến nhất</option><option value="price-asc">Giá thấp đến cao</option><option value="price-desc">Giá cao đến thấp</option><option value="newest">Mới nhất</option></select></div><div class="product-grid">${productGrid(books)}</div></div></div>`;
}

function productPage(id) {
	const book = books.find(item => item.id === id) || books[0];
	currentDetailQty = 1;
	return `${banner("Câu chuyện trong từng trang", "Một lựa chọn được BOOKHUB gửi đến bạn.", "Chi tiết sách")}<div class="container detail-layout"><div><div class="detail-main-image"><img src="${book.image}" alt="Bìa sách ${book.title}" /></div><div class="detail-thumbs"><img class="selected" src="${book.image}" alt="Bìa trước của ${book.title}" /><img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80" alt="Sách trong không gian đọc" /><img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80" alt="Góc sách" /></div></div><div class="detail-copy"><span class="eyebrow">${book.category}</span><h1>${book.title}</h1><p class="product-author">Tác giả: ${book.author}</p><div class="rating"><span>★★★★★</span><span>${book.rating} · ${book.reviews} đánh giá</span></div><div class="detail-price"><strong>${money(book.price)}</strong><del class="old-price">${money(book.oldPrice)}</del></div><p class="detail-desc">${book.description}</p><p class="detail-desc">Một cuốn sách được tuyển chọn kỹ càng cho những phút giây đọc thật trọn vẹn. Sách mới, chính hãng, được BOOKHUB đóng gói cẩn thận trước khi gửi đến bạn.</p><div class="detail-quantity"><button data-qty="-1" aria-label="Giảm số lượng">−</button><span class="detail-qty">1</span><button data-qty="1" aria-label="Tăng số lượng">+</button></div><div class="detail-actions"><button class="button button-dark" data-add="${book.id}" data-qty-cart>Thêm vào giỏ hàng</button><button class="button button-primary" data-buy="${book.id}">Mua ngay <span>↗</span></button><button class="favorite-button ${wishlist.includes(book.id) ? "is-favorite" : ""}" data-favorite="${book.id}" aria-label="Yêu thích"><svg viewBox="0 0 24 24"><path d="M20.8 8.7c0 5.2-8.8 10.2-8.8 10.2S3.2 13.9 3.2 8.7a4.5 4.5 0 0 1 8.8-1.4 4.5 4.5 0 0 1 8.8 1.4Z"/></svg></button></div><div class="detail-meta"><span><strong>Nhà xuất bản</strong><br />${book.publisher}</span><span><strong>Năm xuất bản</strong><br />${book.year}</span><span><strong>Số trang</strong><br />${book.pages} trang</span><span><strong>Mã ISBN</strong><br />${book.isbn}</span></div></div></div><section class="container section-tight"><div class="detail-tabs"><button class="active" data-tab="description">Mô tả chi tiết</button><button data-tab="author">Về tác giả</button><button data-tab="reviews">Đánh giá (${book.reviews})</button></div><div class="detail-tab-content" data-tab-content>${book.description} BOOKHUB tin rằng mỗi trang sách hay là một cơ hội để ta dừng lại, nghĩ khác đi và tìm thấy điều mới mẻ trong chính mình.</div></section><section class="section-tight"><div class="container">${sectionHead("Có thể bạn cũng thích", "Sách cùng chủ đề", "")}<div class="product-grid">${productGrid(books.filter(item => item.id !== book.id).slice(0, 4))}</div></div></section>`;
}

function projectsPage() {
	return `${banner("Đọc cùng nhau, lớn lên cùng nhau", "Mỗi cuốn sách trao đi là một cánh cửa mới được mở ra.", "Dự án")}<section class="section"><div class="container"><div class="project-grid">${projects.map((project, index) => `<article class="project-card"><div class="project-image"><img src="${project.image}" alt="${project.title}" loading="lazy" /></div><div class="project-copy"><span class="project-date">${project.date}</span><h2>${project.title}</h2><p>${project.text}</p><a href="#contact" class="text-link" data-project="${index}">Xem chi tiết <span>→</span></a></div></article>`).join("")}</div></div></section><section class="section-tight"><div class="container">${newsletter()}</div></section>`;
}

function aboutPage() {
	const team = [["https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=85", "Linh Nguyễn", "Đồng sáng lập · Biên tập"], ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85", "Minh Trần", "Đồng sáng lập · Vận hành"], ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85", "Hà Lê", "Tuyển chọn nội dung"], ["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85", "Nam Phạm", "Cộng đồng độc giả"]];
	return `${banner("Về BOOKHUB", "BOOKHUB là nhà sách trực tuyến với sứ mệnh đưa những cuốn sách chất lượng đến gần hơn với mọi độc giả.")}<section class="section"><div class="container about-intro"><div class="about-image"><img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1100&q=85" alt="Một thư viện ấm áp với những kệ sách cao" loading="lazy" /></div><div class="about-copy"><span class="eyebrow">Câu chuyện của chúng tôi</span><h2 class="section-title">Bắt đầu từ một cuốn sách được chuyền tay.</h2><p class="lead">Chúng tôi tin rằng đọc sách không chỉ là cách tìm câu trả lời, mà còn là cách đặt ra những câu hỏi mới.</p><p>BOOKHUB bắt đầu từ tình yêu với những hiệu sách nhỏ và niềm vui khi tìm được đúng cuốn sách vào đúng thời điểm. Hôm nay, chúng tôi mang tình yêu ấy lên không gian trực tuyến, cùng một cộng đồng độc giả ngày càng rộng lớn.</p><p><strong>Sứ mệnh</strong> của chúng tôi là giúp việc tìm và chọn sách trở nên dễ dàng, gần gũi và đầy cảm hứng. Chúng tôi hướng đến một cộng đồng nơi tri thức được chia sẻ rộng mở.</p></div></div></section><section class="section-tight"><div class="container">${sectionHead("Điều làm nên BOOKHUB", "Bốn điều chúng tôi luôn gìn giữ", "") }<div class="value-grid"><article class="value-card"><span>01</span><h3>Chất lượng</h3><p>Mỗi cuốn sách được chọn lọc kỹ càng từ nguồn phát hành uy tín.</p></article><article class="value-card"><span>02</span><h3>Uy tín</h3><p>Thông tin minh bạch, chăm sóc tận tâm, đúng lời đã hứa.</p></article><article class="value-card"><span>03</span><h3>Đổi mới</h3><p>Không ngừng làm mới trải nghiệm đọc và khám phá sách.</p></article><article class="value-card"><span>04</span><h3>Khách hàng là trung tâm</h3><p>Lắng nghe độc giả để mỗi lần mở sách đều thật vui.</p></article></div></div></section><section class="section-tight"><div class="container"><div class="stats-band"><div class="stat"><strong>10.000+</strong><span>Đầu sách tuyển chọn</span></div><div class="stat"><strong>50.000+</strong><span>Độc giả thân thiết</span></div><div class="stat"><strong>20+</strong><span>Đối tác xuất bản</span></div><div class="stat"><strong>99%</strong><span>Khách hàng hài lòng</span></div></div></div></section><section class="section"><div class="container">${sectionHead("Những người yêu sách", "Một đội ngũ, nhiều câu chuyện", "Mỗi ngày, chúng tôi tìm kiếm những cuốn sách xứng đáng được trao đến bạn.")}<div class="team-grid">${team.map(member => `<article class="team-card"><img src="${member[0]}" alt="${member[1]}, ${member[2]}" loading="lazy" /><h3>${member[1]}</h3><p>${member[2]}</p></article>`).join("")}</div></div></section>`;
}

function galleryPage() {
	return `${banner("Một thế giới qua lăng kính BOOKHUB", "Những không gian, con người và khoảnh khắc làm nên tình yêu đọc sách.", "Thư viện ảnh")}<section class="section"><div class="container"><div class="gallery-grid">${galleryImages.map((image, index) => `<button class="gallery-item" data-gallery="${index}" aria-label="Xem ảnh: ${image[0]}"><img src="${image[1]}" alt="${image[0]}" loading="lazy" /><span>${image[0]}</span></button>`).join("")}</div></div></section>`;
}

function contactPage() {
	const faqs = [["BOOKHUB giao hàng trong bao lâu?", "Đơn hàng thường được giao trong 1–3 ngày làm việc tại thành phố lớn và 3–5 ngày tại các tỉnh thành khác."], ["Tôi có thể đổi hoặc trả sách không?", "BOOKHUB hỗ trợ đổi trả trong 7 ngày nếu sách bị lỗi in ấn, hư hỏng khi vận chuyển hoặc không đúng với đơn đặt hàng."], ["Làm sao để tra cứu đơn hàng?", "Sau khi đặt hàng, chúng tôi gửi xác nhận và mã đơn qua email. Bạn cũng có thể liên hệ đội ngũ hỗ trợ để được cập nhật."], ["BOOKHUB có gói quà không?", "Có. Hãy ghi chú yêu cầu gói quà khi đặt hàng hoặc liên hệ chúng tôi để được hỗ trợ."], ["Tôi có thể thanh toán bằng những cách nào?", "Bạn có thể chọn thanh toán khi nhận hàng, chuyển khoản ngân hàng hoặc ví điện tử tại bước thanh toán."]];
	return `${banner("Liên hệ với BOOKHUB", "Chúng tôi luôn sẵn lòng nghe bạn kể về cuốn sách tiếp theo mình đang tìm.")}<section class="section"><div class="container contact-layout"><div class="contact-info"><span class="eyebrow">Chúng tôi ở đây</span><h2>Chào bạn, cần BOOKHUB giúp gì?</h2><p>Gửi lời nhắn cho chúng tôi. Đội ngũ hỗ trợ sẽ phản hồi trong giờ làm việc.</p><div class="contact-line"><span>⌖</span><div><strong>Địa chỉ</strong><small>12 Nguyễn Văn Bình, Quận 1, TP. Hồ Chí Minh</small></div></div><div class="contact-line"><span>↗</span><div><strong>Điện thoại</strong><small>1900 6868 · Thứ 2 – Thứ 7</small></div></div><div class="contact-line"><span>✉</span><div><strong>Email</strong><small>hello@bookhub.vn</small></div></div><div class="contact-line"><span>◷</span><div><strong>Thời gian làm việc</strong><small>08:00 – 21:00, Thứ 2 – Chủ nhật</small></div></div><div class="social-links"><a href="https://facebook.com" aria-label="Facebook">f</a><a href="https://instagram.com" aria-label="Instagram">ig</a><a href="https://youtube.com" aria-label="YouTube">▶</a><a href="https://tiktok.com" aria-label="TikTok">♪</a></div></div><div class="contact-form-wrap"><span class="eyebrow">Lời nhắn của bạn</span><h2>Viết cho chúng tôi</h2><form data-contact><div class="form-grid"><div class="field"><label for="contact-name">Họ và tên</label><input id="contact-name" name="name" required placeholder="Tên của bạn" /></div><div class="field"><label for="contact-email">Email</label><input id="contact-email" name="email" type="email" required placeholder="ban@email.com" /></div><div class="field"><label for="contact-phone">Số điện thoại</label><input id="contact-phone" name="phone" type="tel" placeholder="09xx xxx xxx" /></div><div class="field"><label for="contact-subject">Chủ đề</label><select id="contact-subject" name="subject"><option>Tư vấn chọn sách</option><option>Đơn hàng</option><option>Hợp tác</option><option>Khác</option></select></div><div class="field full"><label for="contact-message">Nội dung</label><textarea id="contact-message" name="message" required placeholder="Bạn đang cần BOOKHUB hỗ trợ điều gì?"></textarea></div></div><label class="checkbox-field"><input type="checkbox" required /> Tôi đồng ý với chính sách bảo mật và cho phép BOOKHUB liên hệ lại.</label><button class="button button-dark" type="submit">Gửi liên hệ <span>↗</span></button></form></div></div><div class="container map-placeholder" role="img" aria-label="Bản đồ minh họa vị trí BOOKHUB tại Quận 1, TP. Hồ Chí Minh"><div class="map-pin"><span>⌖</span></div><div class="map-label"><strong>BOOKHUB</strong><br />12 Nguyễn Văn Bình, Quận 1</div></div></section><section class="section-tight"><div class="container"><div class="section-head"><div><span class="eyebrow">Hỏi nhanh, đáp gọn</span><h2 class="section-title">Câu hỏi thường gặp</h2></div></div><div class="faq-list">${faqs.map(faq => `<details><summary>${faq[0]}</summary><p>${faq[1]}</p></details>`).join("")}</div></div></section>`;
}

function cartPage() {
	const rows = cart.map(item => ({ ...item, book: books.find(book => book.id === item.id) })).filter(item => item.book);
	if (!rows.length) return `${banner("Giỏ hàng", "Có một cuốn sách hay đang chờ được chọn.")}<div class="container success-state"><span>♡</span><h1>Giỏ hàng đang trống</h1><p>Đôi khi một hành trình mới bắt đầu từ một cuốn sách.</p><a href="#products" class="button button-dark">Khám phá sách <span>↗</span></a></div>`;
	const subtotal = rows.reduce((sum, item) => sum + item.book.price * item.qty, 0);
	return `${banner("Giỏ hàng của bạn", `Bạn đang có ${rows.reduce((sum, item) => sum + item.qty, 0)} cuốn sách trong giỏ.`)}<div class="container cart-layout"><div><div class="cart-table-head"><span>Sản phẩm</span><span>Đơn giá</span><span>Số lượng</span><span>Thành tiền</span></div>${rows.map(item => `<div class="cart-row"><div class="cart-book"><a href="#product/${item.book.id}"><img src="${item.book.image}" alt="${item.book.title}" /></a><div><a href="#product/${item.book.id}"><strong>${item.book.title}</strong></a><small>${item.book.author}</small></div></div><span class="cart-price">${money(item.book.price)}</span><div class="quantity-control"><button data-cart-qty="${item.book.id}" data-delta="-1" aria-label="Giảm số lượng">−</button><span>${item.qty}</span><button data-cart-qty="${item.book.id}" data-delta="1" aria-label="Tăng số lượng">+</button></div><span class="cart-price">${money(item.book.price * item.qty)}</span><button class="remove-button" data-remove="${item.book.id}">Xóa</button></div>`).join("")}<p style="margin-top:18px"><a href="#products" class="text-link">← Tiếp tục mua sắm</a></p></div><aside class="order-card"><h2>Tóm tắt đơn hàng</h2><div class="order-line"><span>Tạm tính</span><strong>${money(subtotal)}</strong></div><div class="order-line"><span>Phí vận chuyển</span><strong>${subtotal >= 300000 ? "Miễn phí" : money(25000)}</strong></div><div class="order-line total"><span>Tổng cộng</span><span>${money(subtotal + (subtotal >= 300000 ? 0 : 25000))}</span></div><p class="order-note">Miễn phí giao hàng cho đơn từ 300.000₫</p><a href="#checkout" class="button button-primary">Tiến hành thanh toán <span>↗</span></a></aside></div>`;
}

function checkoutPage() {
	if (!cart.length) return `${banner("Thanh toán", "Thêm sách vào giỏ để tiếp tục.")}<div class="container success-state"><span>♡</span><h1>Chưa có sản phẩm</h1><p>Chọn một cuốn sách trước khi tiến hành thanh toán nhé.</p><a class="button button-dark" href="#products">Khám phá sách</a></div>`;
	const items = cart.map(item => ({ ...item, book: books.find(book => book.id === item.id) })).filter(item => item.book);
	const subtotal = items.reduce((sum, item) => sum + item.book.price * item.qty, 0);
	const shipping = subtotal >= 300000 ? 0 : 25000;
	return `${banner("Thanh toán", "Chỉ còn vài thông tin nhỏ để những cuốn sách sớm đến với bạn.")}<form class="container checkout-layout" data-checkout><div><h2 class="checkout-section-title">Thông tin nhận hàng</h2><div class="form-grid"><div class="field full"><label for="checkout-name">Họ và tên</label><input id="checkout-name" name="name" required autocomplete="name" placeholder="Tên người nhận" /></div><div class="field"><label for="checkout-phone">Số điện thoại</label><input id="checkout-phone" name="phone" type="tel" required autocomplete="tel" placeholder="09xx xxx xxx" /></div><div class="field"><label for="checkout-email">Email</label><input id="checkout-email" name="email" type="email" required autocomplete="email" placeholder="ban@email.com" /></div><div class="field full"><label for="checkout-address">Địa chỉ</label><input id="checkout-address" name="address" required autocomplete="street-address" placeholder="Số nhà, tên đường" /></div><div class="field"><label for="checkout-city">Tỉnh / Thành phố</label><input id="checkout-city" name="city" required placeholder="Tỉnh hoặc thành phố" /></div><div class="field"><label for="checkout-district">Quận / Huyện</label><input id="checkout-district" name="district" required placeholder="Quận hoặc huyện" /></div><div class="field"><label for="checkout-ward">Phường / Xã</label><input id="checkout-ward" name="ward" required placeholder="Phường hoặc xã" /></div></div><h2 class="checkout-section-title" style="margin-top:22px">Phương thức thanh toán</h2><label class="payment-option"><input type="radio" name="payment" value="cod" checked /> Thanh toán khi nhận hàng</label><label class="payment-option"><input type="radio" name="payment" value="bank" /> Chuyển khoản ngân hàng</label><label class="payment-option"><input type="radio" name="payment" value="wallet" /> Ví điện tử</label></div><aside class="order-card"><h2>Đơn hàng của bạn</h2>${items.map(item => `<div class="checkout-product"><img src="${item.book.image}" alt="" /><div><strong>${item.book.title}</strong><small>Số lượng: ${item.qty}</small></div><span>${money(item.book.price * item.qty)}</span></div>`).join("")}<div class="order-line"><span>Tạm tính</span><strong>${money(subtotal)}</strong></div><div class="order-line"><span>Phí vận chuyển</span><strong>${shipping ? money(shipping) : "Miễn phí"}</strong></div><div class="order-line total"><span>Tổng cộng</span><span>${money(subtotal + shipping)}</span></div><button type="submit" class="button button-primary">Đặt hàng <span>↗</span></button><p class="order-note">Thông tin của bạn được bảo mật an toàn.</p></aside></form>`;
}

function authPage(register = false) {
	return `<section class="auth-wrap"><span class="eyebrow">Chào mừng bạn đến với BOOKHUB</span><h1>${register ? "Tạo tài khoản" : "Đăng nhập"}</h1><p>${register ? "Bắt đầu lưu lại những cuốn sách bạn yêu." : "Tiếp tục hành trình đọc của bạn."}</p><form data-auth>${register ? `<div class="field"><label for="auth-name">Họ và tên</label><input id="auth-name" name="name" required autocomplete="name" placeholder="Tên của bạn" /></div>` : ""}<div class="field"><label for="auth-email">Email</label><input id="auth-email" name="email" type="email" required autocomplete="email" placeholder="ban@email.com" /></div><div class="field"><label for="auth-password">Mật khẩu</label><input id="auth-password" name="password" type="password" required minlength="6" autocomplete="${register ? "new-password" : "current-password"}" placeholder="Ít nhất 6 ký tự" /></div><button type="submit" class="button button-dark" style="width:100%">${register ? "Đăng ký" : "Đăng nhập"} <span>↗</span></button></form><div class="auth-switch">${register ? "Đã có tài khoản?" : "Bạn chưa có tài khoản?"} <a href="#${register ? "login" : "register"}">${register ? "Đăng nhập" : "Đăng ký ngay"}</a></div></section>`;
}

function footer() {
	return `<div class="footer-grid"><div><a class="footer-brand" href="#home">BOOK<span>HUB</span></a><p>Đọc sách hôm nay – Khám phá thế giới ngày mai.</p><div class="footer-social"><a href="https://facebook.com" aria-label="Facebook">f</a><a href="https://instagram.com" aria-label="Instagram">ig</a><a href="https://youtube.com" aria-label="YouTube">▶</a><a href="https://tiktok.com" aria-label="TikTok">♪</a></div></div><div><h3>Điều hướng</h3><ul><li><a href="#home">Trang chủ</a></li><li><a href="#products">Sản phẩm</a></li><li><a href="#projects">Dự án</a></li><li><a href="#about">Về chúng tôi</a></li><li><a href="#gallery">Thư viện ảnh</a></li><li><a href="#contact">Liên hệ</a></li></ul></div><div><h3>Hỗ trợ</h3><ul><li><a href="#contact">Chính sách giao hàng</a></li><li><a href="#contact">Chính sách đổi trả</a></li><li><a href="#contact">Chính sách bảo mật</a></li><li><a href="#contact">Điều khoản sử dụng</a></li><li><a href="#contact">Câu hỏi thường gặp</a></li></ul></div><div><h3>Thư từ BOOKHUB</h3><p>Gợi ý sách hay và những điều thú vị, gửi đến hộp thư của bạn.</p><form class="footer-newsletter" data-newsletter><label class="sr-only" for="footer-email">Địa chỉ email</label><input id="footer-email" name="email" type="email" placeholder="Địa chỉ email" required /><button class="button button-primary" type="submit">Đăng ký</button></form></div></div><div class="footer-bottom"><span>© 2026 BOOKHUB. Mỗi trang sách, một thế giới.</span><span>Hỗ trợ độc giả: 1900 6868 · hello@bookhub.vn</span></div>`;
}

function render() {
	const rawHash = location.hash.slice(1) || "home";
	const [route, queryString = ""] = rawHash.split("?");
	const routeName = route.split("/")[0];
	let html;
	if (routeName === "product") html = productPage(route.split("/")[1]);
	else if (routeName === "products") html = productsPage();
	else if (routeName === "projects") html = projectsPage();
	else if (routeName === "about") html = aboutPage();
	else if (routeName === "gallery") html = galleryPage();
	else if (routeName === "contact") html = contactPage();
	else if (routeName === "cart") html = cartPage();
	else if (routeName === "checkout") html = checkoutPage();
	else if (routeName === "login") html = authPage(false);
	else if (routeName === "register") html = authPage(true);
	else { html = homePage(); }
	app.innerHTML = html;
	document.querySelector("#site-footer").innerHTML = footer();
	document.querySelectorAll(".primary-nav [data-nav]").forEach(link => link.classList.toggle("active", link.dataset.nav === routeName));
	document.title = `${({ home: "Nhà sách trực tuyến", products: "Tất cả sách", product: "Chi tiết sách", projects: "Dự án cộng đồng", about: "Về BOOKHUB", gallery: "Thư viện ảnh", contact: "Liên hệ", cart: "Giỏ hàng", checkout: "Thanh toán", login: "Đăng nhập", register: "Đăng ký" })[routeName] || "Nhà sách trực tuyến"} | BOOKHUB`;
	updateCartCount();
	if (routeName === "products") {
		const params = new URLSearchParams(queryString);
		if (params.get("category")) {
			const checkbox = document.querySelector(`input[name="category"][value="${CSS.escape(params.get("category"))}"]`);
			if (checkbox) checkbox.checked = true;
		}
		filterProducts();
	}
	document.querySelector(".primary-nav").classList.remove("open");
	document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
	document.querySelector(".header-search").classList.remove("open");
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterProducts() {
	const grid = document.querySelector(".shop-results .product-grid");
	if (!grid) return;
	const selectedCategories = [...document.querySelectorAll('input[name="category"]:checked')].map(input => input.value);
	const min = Number(document.querySelector('[name="minPrice"]').value) || 0;
	const max = Number(document.querySelector('[name="maxPrice"]').value) || Infinity;
	const author = document.querySelector('[name="author"]').value;
	const rating = Number(document.querySelector('input[name="rating"]:checked')?.value || 0);
	const query = document.querySelector("#shop-query").value.trim().toLocaleLowerCase("vi");
	const sort = document.querySelector('[name="sort"]').value;
	let filtered = books.filter(book => (!selectedCategories.length || selectedCategories.includes(book.category)) && book.price >= min && book.price <= max && (!author || book.author === author) && book.rating >= rating && (!query || `${book.title} ${book.author} ${book.category}`.toLocaleLowerCase("vi").includes(query)));
	if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
	if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
	if (sort === "newest") filtered.sort((a, b) => b.year - a.year);
	grid.innerHTML = productGrid(filtered);
	document.querySelector(".result-count").textContent = `Đang hiển thị ${filtered.length} cuốn sách`;
}

function changeCartQty(id, delta) {
	const item = cart.find(entry => entry.id === id);
	if (!item) return;
	item.qty += delta;
	if (item.qty < 1) cart = cart.filter(entry => entry.id !== id);
	persist();
	render();
}

function openLightbox(index) {
	activeGalleryIndex = (index + galleryImages.length) % galleryImages.length;
	const lightbox = document.querySelector(".lightbox");
	lightbox.querySelector("img").src = galleryImages[activeGalleryIndex][1].replace("w=850", "w=1500").replace("w=1100", "w=1500");
	lightbox.querySelector("img").alt = galleryImages[activeGalleryIndex][0];
	lightbox.querySelector(".lightbox-caption").textContent = `${galleryImages[activeGalleryIndex][0]} · ${activeGalleryIndex + 1}/${galleryImages.length}`;
	lightbox.classList.add("open");
	lightbox.setAttribute("aria-hidden", "false");
	document.body.style.overflow = "hidden";
}

function closeLightbox() {
	document.querySelector(".lightbox").classList.remove("open");
	document.querySelector(".lightbox").setAttribute("aria-hidden", "true");
	document.body.style.overflow = "";
}

document.addEventListener("click", event => {
	const add = event.target.closest("[data-add]");
	if (add) {
		event.preventDefault();
		addToCart(add.dataset.add, add.hasAttribute("data-qty-cart") ? currentDetailQty : 1);
	}
	const favorite = event.target.closest("[data-favorite]");
	if (favorite) { event.preventDefault(); toggleWishlist(favorite.dataset.favorite); }
	const buy = event.target.closest("[data-buy]");
	if (buy) { addToCart(buy.dataset.buy, currentDetailQty); location.hash = "#checkout"; }
	const qty = event.target.closest("[data-qty]");
	if (qty) { currentDetailQty = Math.max(1, currentDetailQty + Number(qty.dataset.qty)); document.querySelector(".detail-qty").textContent = currentDetailQty; }
	const cartQty = event.target.closest("[data-cart-qty]");
	if (cartQty) changeCartQty(cartQty.dataset.cartQty, Number(cartQty.dataset.delta));
	const remove = event.target.closest("[data-remove]");
	if (remove) { cart = cart.filter(item => item.id !== remove.dataset.remove); persist(); render(); showToast("Đã xóa sách khỏi giỏ hàng."); }
	const gallery = event.target.closest("[data-gallery]");
	if (gallery) openLightbox(Number(gallery.dataset.gallery));
	const tab = event.target.closest("[data-tab]");
	if (tab) {
		document.querySelectorAll("[data-tab]").forEach(button => button.classList.toggle("active", button === tab));
		const book = books.find(item => location.hash.includes(item.id)) || books[0];
		const content = document.querySelector("[data-tab-content]");
		const messages = { description: `${book.description} BOOKHUB tin rằng mỗi trang sách hay là một cơ hội để ta dừng lại, nghĩ khác đi và tìm thấy điều mới mẻ trong chính mình.`, author: `${book.author} mang đến những góc nhìn độc đáo, được nhiều độc giả yêu mến và chia sẻ. Khám phá thêm những đầu sách được tuyển chọn tại BOOKHUB.`, reviews: `Độc giả BOOKHUB chấm ${book.rating}/5 sao từ ${book.reviews} lượt đánh giá. “Sách đẹp, nội dung cuốn hút và giao hàng rất nhanh.”` };
		content.textContent = messages[tab.dataset.tab];
	}
	if (event.target.closest("[data-clear-filters]")) {
		document.querySelectorAll(".filters input").forEach(input => { if (input.type === "checkbox") input.checked = false; else input.value = ""; });
		document.querySelector('[name="rating"][value="0"]').checked = true;
		document.querySelector('[name="author"]').value = "";
		filterProducts();
	}
	if (event.target.closest("[data-shop-search]")) filterProducts();
	if (event.target.closest(".search-toggle")) {
		const form = document.querySelector(".header-search");
		form.classList.toggle("open");
		if (form.classList.contains("open")) form.querySelector("input").focus();
	}
	if (event.target.closest(".menu-toggle")) {
		const menu = document.querySelector(".primary-nav");
		menu.classList.toggle("open");
		document.querySelector(".menu-toggle").setAttribute("aria-expanded", String(menu.classList.contains("open")));
	}
	if (event.target.closest(".lightbox-close") || (event.target.classList.contains("lightbox"))) closeLightbox();
	if (event.target.closest(".lightbox-prev")) openLightbox(activeGalleryIndex - 1);
	if (event.target.closest(".lightbox-next")) openLightbox(activeGalleryIndex + 1);
	const thumb = event.target.closest(".detail-thumbs img");
	if (thumb) {
		document.querySelectorAll(".detail-thumbs img").forEach(image => image.classList.toggle("selected", image === thumb));
		document.querySelector(".detail-main-image img").src = thumb.src;
		document.querySelector(".detail-main-image img").alt = thumb.alt;
	}
});

document.addEventListener("input", event => {
	if (event.target.closest(".filters") || event.target.matches("#shop-query")) filterProducts();
});
document.addEventListener("change", event => {
	if (event.target.closest(".filters") || event.target.matches('[name="sort"]')) filterProducts();
});
document.addEventListener("submit", event => {
	const form = event.target;
	if (form.matches(".header-search")) {
		event.preventDefault();
		const query = form.querySelector("input").value.trim();
		location.hash = "#products";
		setTimeout(() => { const input = document.querySelector("#shop-query"); if (input) { input.value = query; filterProducts(); } }, 0);
	}
	if (form.matches("[data-newsletter]")) { event.preventDefault(); showToast("Cảm ơn bạn đã đăng ký nhận tin từ BOOKHUB."); form.reset(); }
	if (form.matches("[data-contact]")) { event.preventDefault(); showToast("Cảm ơn bạn. BOOKHUB sẽ sớm liên hệ lại!"); form.reset(); }
	if (form.matches("[data-auth]")) { event.preventDefault(); showToast("Thông tin đã được ghi nhận. Tính năng tài khoản sẽ sẵn sàng khi kết nối hệ thống."); form.reset(); }
	if (form.matches("[data-checkout]")) {
		event.preventDefault();
		cart = [];
		persist();
		app.innerHTML = `<div class="container success-state"><span>✓</span><h1>Đặt hàng thành công!</h1><p>Cảm ơn bạn đã chọn BOOKHUB. Thông tin xác nhận đơn hàng sẽ được gửi đến email của bạn.</p><a href="#products" class="button button-dark">Tiếp tục khám phá <span>↗</span></a></div>`;
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
});

window.addEventListener("hashchange", render);
document.addEventListener("keydown", event => {
	if (event.key === "Escape") closeLightbox();
	if (document.querySelector(".lightbox.open")) {
		if (event.key === "ArrowRight") openLightbox(activeGalleryIndex + 1);
		if (event.key === "ArrowLeft") openLightbox(activeGalleryIndex - 1);
	}
});

document.querySelector("#site-footer").innerHTML = footer();
if (!location.hash) history.replaceState(null, "", "#home");
render();
