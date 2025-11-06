document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuButton = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-main');

    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Adiciona ou remove a classe 'active' do menu de navegação
            navMenu.classList.toggle('active');
            
            // Opcional: Mudar o ícone de 'bars' para 'times' (X)
            const icon = mobileMenuButton.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

});