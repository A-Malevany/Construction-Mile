$(document).ready(function() {
	$('#composition__flipbook').turn({
		width: '100%',
		height: 'auto',
		acceleration: 1,
		ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		autoCenter: true,
		display: 'single',
	});

	// Навигация с помощью кнопок
	$('#composition__flipbook-prev').click(function() {
		$('#composition__flipbook').turn('previous');
	});

	$('#composition__flipbook-next').click(function() {
		$('#composition__flipbook').turn('next');
	});
});