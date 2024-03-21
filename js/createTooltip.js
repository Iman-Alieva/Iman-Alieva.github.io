export const createTooltip = (type, value, link) => {
    const tooltip = document.createElement('div');
    const tooltipType = document.createElement('span');
    const tooltipValue = document.createElement('a');

    tooltip.classList.add('contact-tooltip', 'tooltip');
    tooltipValue.classList.add('contact-tooltip__valueother');

    tooltipType.textContent = type + ': ';

    switch (type) {
        case 'Телефон' :
            tooltipType.textContent = '';
            tooltipValue.classList.add('contact-tooltip__value');
            break
        case 'Vk' :
            tooltipType.textContent = '';
            tooltipValue.classList.add('contact-tooltip__value');
            break
        case 'Facebook' :
            tooltipType.textContent = '';
            tooltipValue.classList.add('contact-tooltip__value');
            break
        case 'Email' :
            tooltipType.textContent = '';
            tooltipValue.classList.add('contact-tooltip__value');
            break
    }

    tooltipValue.textContent = value;
    tooltipValue.href = `${link.href}`;

    tooltip.append(tooltipType, tooltipValue);

    return {
        tooltip,
        tooltipType,
        tooltipValue,
    };
};