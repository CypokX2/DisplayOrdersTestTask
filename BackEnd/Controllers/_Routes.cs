using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    public static class Routes
    {
        private const string _api = "api";
        public static class Orders
        {
            private const string _controller = _api + "/orders";
            public const string GetBreif = Orders._controller + "/brief";
            public const string GetDetalized = Orders._controller + "/details";
            public const string PutOrder = Orders._controller + "/put-order";
        }


    }
}
