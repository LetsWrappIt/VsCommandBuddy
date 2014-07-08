module.exports = function (grunt) {
    // Load in `grunt-spritesmith`
    grunt.loadNpmTasks('grunt-spritesmith');

    var configuration = grunt.option("configuration");
    grunt.log.writeln("Current configuration is: " + configuration);


    // Configure grunt
    grunt.initConfig({
        sprite: {
            all: {
                src: 'img/sprites/*.png',
                destImg: 'img/spritesheet.png',
                destCSS: 'css/sprites.css'
            }
        }
    });

    grunt.registerTask('default', ['sprite:all']);
    grunt.registerTask('makeSprite', ['sprite:all']);

}