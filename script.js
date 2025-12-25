 $(document).ready(function() {
            // Mobile Menu Toggle
            $('#hamburger').on('click', function() {
                $('#navLinks').toggleClass('active');
            });

            // Close mobile menu on link click
            $('.nav-link').on('click', function() {
                $('#navLinks').removeClass('active');
            });

            // Animate skill bars when page loads
            animateSkills();
        });

        function showPage(pageName, event) {
            if (event) {
                event.preventDefault();
            }

            // Hide all pages
            $('.page').removeClass('active');
            
            // Show selected page
            $('#' + pageName).addClass('active');

            // Update active nav link
            $('.nav-link').removeClass('active');
            $('[onclick*="' + pageName + '"]').addClass('active');

            // Scroll to top
            $('html, body').animate({scrollTop: 0}, 500);

            // Re-animate skills if on resume page
            if (pageName === 'resume') {
                setTimeout(animateSkills, 300);
            }
        }

        function animateSkills() {
            $('.skill-progress').each(function() {
                const width = $(this).css('width');
                $(this).css('width', '0');
                $(this).animate({
                    width: width
                }, 1200);
            });
        }

        // Close mobile menu when clicking outside
        $(document).on('click', function(event) {
            if (!$(event.target).closest('nav').length) {
                $('#navLinks').removeClass('active');
            }
        });