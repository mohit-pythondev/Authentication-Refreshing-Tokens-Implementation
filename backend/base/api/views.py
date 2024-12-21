from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/tokens',
        'api/tokens/refresh',
    ]
    # return JsonResponse(routes, safe=False)
    return Response(routes)