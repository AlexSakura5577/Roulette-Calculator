
function openWindowsControl(openBtn, modal) {
    try {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.showModal();
        });
        modal.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target === modal) modal.close();
        });
    } catch (error) {
        // console.log(error);
    }
};
export { openWindowsControl };