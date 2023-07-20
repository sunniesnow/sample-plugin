output := sample-plugin.ssp

build:
	zip -r $(output) * -x Makefile $(output)
