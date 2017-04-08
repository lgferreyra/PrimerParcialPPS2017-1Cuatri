<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
require '../clases/Personas.php';

$app = new \Slim\App;
$app->get('/hello/{name}', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    return $response;
});

$app->get('/persona/{id}', function(Request $request, Response $response){
	$persona = Persona::TraerUnaPersona($request->getAttribute('id'));
	$personaJson = json_encode($persona);
	$response->getBody()->write($personaJson);

	var_dump($request->getHeaders());
	
	return $response;
});

$app->run();