
function openWindowsControl(openBtn, modal) {
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.showModal();
    });
    modal.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target === modal) modal.close();
    });
};
export { openWindowsControl };