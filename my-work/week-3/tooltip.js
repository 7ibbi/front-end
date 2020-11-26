const toolTipElements = document.querySelectorAll('[data-tooltip]');
// daca nu merge filter
// let toolTipElements = Array.from(toolTipElements);
console.log(toolTipElements);

toolTipElements.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        console.log(event);
        const tooltip = document.createElement('div');
        // tooltip.textContent = event.target.dataset.tooltip;
        tooltip.textContent = element.dataset.tooltip;
        tooltip.id = 'tooltip';

        tooltip.style.background = 'grey';
        tooltip.style.padding = '4px 8px';
        tooltip.style.color = 'white';
        tooltip.style.position = 'absolute';

        const elementBounds = element.getBoundingClientRect();
        console.log(elementBounds);

        document.body.appendChild(tooltip);

        tooltip.style.top = elementBounds.top + window.scrollY - tooltip.offsetHeight + 'px';
        tooltip.style.left = elementBounds.left - (tooltip.offsetWidth - elementBounds.width) / 2 + 'px';
    });

    element.addEventListener('mouseout', (event) => {
        const tooltip = document.getElementById('tooltip');
        tooltip.remove();
    });
})
