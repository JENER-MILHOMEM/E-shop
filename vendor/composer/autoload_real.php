<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitfdfc3c54c5251b4d56d00fa3e98a7d5f
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitfdfc3c54c5251b4d56d00fa3e98a7d5f', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitfdfc3c54c5251b4d56d00fa3e98a7d5f', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitfdfc3c54c5251b4d56d00fa3e98a7d5f::getInitializer($loader));

        $loader->register(true);

        $includeFiles = \Composer\Autoload\ComposerStaticInitfdfc3c54c5251b4d56d00fa3e98a7d5f::$files;
        foreach ($includeFiles as $fileIdentifier => $file) {
            composerRequirefdfc3c54c5251b4d56d00fa3e98a7d5f($fileIdentifier, $file);
        }

        return $loader;
    }
}

/**
 * @param string $fileIdentifier
 * @param string $file
 * @return void
 */
function composerRequirefdfc3c54c5251b4d56d00fa3e98a7d5f($fileIdentifier, $file)
{
    if (empty($GLOBALS['__composer_autoload_files'][$fileIdentifier])) {
        $GLOBALS['__composer_autoload_files'][$fileIdentifier] = true;

        require $file;
    }
}
