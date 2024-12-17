function flipbook() {
	$(document).ready(function() {
		if ($('#composition__flipbook').length > 0) {
			$('#composition__flipbook').turn({
				width: '100%',
				height: 'auto',
				swipe: true,
				acceleration: 1,
				ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				autoCenter: true,
				display: 'single',
			});

			$('#composition__flipbook-prev').click(function() {
				$('#composition__flipbook').turn('previous');
			});

			$('#composition__flipbook-next').click(function() {
				$('#composition__flipbook').turn('next');
			});
		}
	});
}
flipbook()

function slickCarousel() {
	$('.projects__items').slick({
		dots: false,
		arrows: true,
		slidesToShow: 3,
		centerMode: true,
		// infinite: false,
		slidesToScroll: 1,
		centerPadding: '0px',
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
}
slickCarousel();

function popupListInsert(current) {
	const data = current.dataset.list;
	if (data) {
		const dataArray = data.split(',').map(item => item.trim());	
		const popupContent = document.querySelector('#popup-list .popup__content');

		const ulElement = document.createElement('ul');
		dataArray.forEach(item => {
			const liElement = document.createElement('li');
			const spanElement = document.createElement('span');

			spanElement.textContent = '✓';
			liElement.appendChild(spanElement);
			liElement.append(` ${item}`);
			ulElement.appendChild(liElement);
		});

		popupContent.innerHTML = '';
		popupContent.appendChild(ulElement);
	}
}

function popupList() {
	$('.price__item-btn').click( function () {
		$('body').toggleClass('modal-open');
		$('#popup-list').addClass('active');

		popupListInsert(this);

		$('#popup-list .popup__close').click(function () {
			$(this).closest('.popup').removeClass('active');
			$('body').removeClass('modal-open');
		})
	})
	$(document).click( function (e) {
		if ($(e.target).hasClass('popup')) {
			$('.popup').removeClass('active');
			$('body').removeClass('modal-open');
		}
	})
}
popupList();

function addPosts() {
	let countMaxPost = 2;

	$('.post-wrapper').each(function () {
		let wrapper = $(this);

		wrapper.find('.add-post-btn').hide();
		wrapper.find('.post-item').hide();
		wrapper.find(`.post-item:lt(${countMaxPost})`).show();

		if (wrapper.find('.post-item').length > countMaxPost) {
			wrapper.find('.add-post-btn').show();
		}

		wrapper.find('.add-post-btn').click(function () {
			$(this).closest('.post-wrapper').find('.post-item').show();
			$(this).remove();
		});
	});
}
addPosts();