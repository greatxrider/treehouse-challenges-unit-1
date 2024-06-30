function getArea(length, width, unit) {
    const area = length * width;
    return `${area} ${unit}`;
}

getArea(10, 20, 'sq ft');
