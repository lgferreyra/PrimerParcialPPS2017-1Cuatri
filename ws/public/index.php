<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
require '../clases/Personas.php';
require '../clases/Trivia.php';
require '../clases/Ppt.php';


$configuration = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];
$c = new \Slim\Container($configuration);
$app = new \Slim\App($c);

$app->get('/hello/{name}', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    return $response;
});

$app->get('/scores/', function (Request $request, Response $response) {
	$json = json_encode(Trivia::getScores());
    $response->getBody()->write($json);

    return $response;
});

$app->post('/scores/insert/', function(Request $request, Response $response){
	$score = $request->getParsedBody();
	var_dump($score);
	$id = json_encode(Trivia::saveScore($score));
	$response->getBody()->write($id);
	
	return $response;
});

$app->get('/ppt/', function (Request $request, Response $response) {
	$json = json_encode(Ppt::getScores());
    $response->getBody()->write($json);

    return $response;
});

$app->post('/ppt/insert/', function(Request $request, Response $response){
	$score = $request->getParsedBody();
	$id = json_encode(Ppt::saveScore($score));
	$response->getBody()->write($id);
	
	return $response;
});

$app->run();