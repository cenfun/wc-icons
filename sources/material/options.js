module.exports = {
    name: '@material-design-icons/svg',
    url: 'https://github.com/marella/material-design-icons',
    dirs: {
        filled: 'node_modules/@material-design-icons/svg/filled',
        outlined: 'node_modules/@material-design-icons/svg/outlined'
    },


    onSVGDocument: function($svg) {
        $svg.attr('fill', 'currentColor');
    },
    onSVGName: function(name, item) {
        name = name.toLowerCase();
        name = name.split('_').join('-');
        return this.onSVGNameDefault(name, item);
    },

    readme: 'Without sharp/round/two-tone icons'
};
